// Script to parse the CSV and convert to JavaScript format
const fs = require('fs');

// Read the CSV file
const csvContent = fs.readFileSync('src/data/doctors_cleaned.csv', 'utf-8');

// Simple CSV parser that handles the malformed data
function parseCSV(text) {
    const lines = text.split('\n');
    const result = [];
    
    // Skip header
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Split by comma, but be careful with quoted fields
        const fields = [];
        let current = '';
        let inQuotes = false;
        let quoteChar = '';
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            
            if ((char === '"' || char === "'") && !inQuotes) {
                inQuotes = true;
                quoteChar = char;
            } else if (char === quoteChar && inQuotes) {
                inQuotes = false;
                quoteChar = '';
            } else if (char === ',' && !inQuotes) {
                fields.push(current.trim());
                current = '';
                continue;
            }
            
            current += char;
        }
        fields.push(current.trim());
        
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

// Parse the data
const doctors = parseCSV(csvContent);

// Clean up the data
const cleanedDoctors = doctors.map(doctor => {
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

// Generate JavaScript code
const jsCode = `// Complete medical facilities data
const doctorsData = ${JSON.stringify(cleanedDoctors, null, 2)};

console.log('Total facilities:', doctorsData.length);
`;

// Write to file
fs.writeFileSync('doctors_data.js', jsCode);

console.log(`Parsed ${cleanedDoctors.length} medical facilities`);
console.log('Sample facility:', cleanedDoctors[0]);
