// Better CSV parser that handles malformed data
const fs = require('fs');

// Read the CSV file
const csvContent = fs.readFileSync('src/data/doctors_cleaned.csv', 'utf-8');

function parseCSVBetter(text) {
    const lines = text.split('\n');
    const result = [];
    
    // Skip header
    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;
        
        // Handle multi-line entries by looking ahead
        while (i + 1 < lines.length && !isNewRecord(lines[i + 1])) {
            i++;
            line += ' ' + lines[i].trim();
        }
        
        // Parse the line
        const fields = parseLine(line);
        if (fields.length >= 8) {
            result.push({
                name: fields[0] || '',
                specialty: fields[1] || '',
                address: fields[2] || '',
                languages: fields[3] || '',
                lat: fields[4] || '',
                lng: fields[5] || '',
                phone: fields[6] || '',
                gen: fields[7] || ''
            });
        }
    }
    
    return result;
}

function isNewRecord(line) {
    // A new record typically starts with a capital letter or common prefixes
    const trimmed = line.trim();
    return trimmed && (
        /^[A-Z]/.test(trimmed) || 
        /^(CentroMed|CommuniCare|University Health|Apollo|Health Outcomes|Devine)/i.test(trimmed)
    );
}

function parseLine(line) {
    const fields = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';
    let i = 0;
    
    while (i < line.length) {
        const char = line[i];
        
        if ((char === '"' || char === "'") && !inQuotes) {
            inQuotes = true;
            quoteChar = char;
        } else if (char === quoteChar && inQuotes) {
            // Check if it's an escaped quote
            if (i + 1 < line.length && line[i + 1] === quoteChar) {
                current += char;
                i++; // Skip the next quote
            } else {
                inQuotes = false;
                quoteChar = '';
            }
        } else if (char === ',' && !inQuotes) {
            fields.push(current.trim());
            current = '';
            i++;
            continue;
        } else {
            current += char;
        }
        
        i++;
    }
    
    // Add the last field
    fields.push(current.trim());
    
    return fields;
}

// Clean up the data
function cleanData(doctors) {
    return doctors.map(doctor => {
        // Clean up specialty field
        let specialty = doctor.specialty
            .replace(/^\[/, '')
            .replace(/\]$/, '')
            .replace(/['"]/g, '')
            .replace(/\s*,\s*/g, ', ')
            .trim();
        
        // Clean up gen field
        let gen = doctor.gen
            .replace(/^\[/, '')
            .replace(/\]$/, '')
            .replace(/['"]/g, '')
            .replace(/\s*,\s*/g, ', ')
            .trim();
        
        // Clean up languages field
        let languages = doctor.languages
            .replace(/^\[/, '')
            .replace(/\]$/, '')
            .replace(/['"]/g, '')
            .replace(/\s*,\s*/g, ', ')
            .trim();
        
        // Clean up address
        let address = doctor.address
            .replace(/\s+/g, ' ')
            .trim();
        
        return {
            name: doctor.name.trim(),
            specialty: specialty,
            gen: gen,
            languages: languages,
            address: address,
            lat: doctor.lat.trim(),
            lng: doctor.lng.trim(),
            phone: doctor.phone.trim() || ''
        };
    }).filter(doctor => doctor.name && doctor.name.length > 0);
}

// Parse the data
console.log('Parsing CSV with better parser...');
const doctors = parseCSVBetter(csvContent);
console.log(`Raw parsed: ${doctors.length} records`);

const cleanedDoctors = cleanData(doctors);
console.log(`Cleaned: ${cleanedDoctors.length} records`);

// Generate JavaScript code
const jsCode = `// Complete medical facilities data - ${cleanedDoctors.length} facilities
const doctorsData = ${JSON.stringify(cleanedDoctors, null, 2)};

console.log('Total facilities:', doctorsData.length);
`;

// Write to file
fs.writeFileSync('complete_doctors_data.js', jsCode);

console.log(`Generated complete_doctors_data.js with ${cleanedDoctors.length} facilities`);
console.log('Sample facilities:');
cleanedDoctors.slice(0, 3).forEach((doctor, i) => {
    console.log(`${i + 1}. ${doctor.name}`);
});
