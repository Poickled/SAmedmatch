// Manual parser for the malformed CSV
const fs = require('fs');

// Read the CSV file
const csvContent = fs.readFileSync('src/data/doctors_cleaned.csv', 'utf-8');

// Split by lines and process manually
const lines = csvContent.split('\n');
const doctors = [];

// Skip header
for (let i = 1; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;
    
    // Look for patterns that indicate a new record
    // Records typically start with facility names in caps
    if (isNewRecord(line)) {
        // Try to extract data from this line and potentially following lines
        const record = extractRecord(lines, i);
        if (record && record.name) {
            doctors.push(record);
        }
    }
}

function isNewRecord(line) {
    const trimmed = line.trim();
    return trimmed && (
        /^[A-Z][A-Z\s&'-]+(CLINIC|CENTER|HEALTH|MEDICAL|HOSPITAL|INSTITUTE|WELLNESS|DENTAL|PEDIATRICS)/i.test(trimmed) ||
        /^(CentroMed|CommuniCare|University Health|Apollo|Health Outcomes|Devine)/i.test(trimmed)
    );
}

function extractRecord(lines, startIndex) {
    let name = '';
    let specialty = '';
    let address = '';
    let languages = '';
    let lat = '';
    let lng = '';
    let phone = '';
    let gen = '';
    
    // Try to parse the first line
    const firstLine = lines[startIndex].trim();
    
    // Split by comma but be careful with quotes
    const parts = splitCSVLine(firstLine);
    
    if (parts.length >= 8) {
        name = parts[0].trim();
        specialty = cleanField(parts[1]);
        address = cleanField(parts[2]);
        languages = cleanField(parts[3]);
        lat = parts[4].trim();
        lng = parts[5].trim();
        phone = parts[6].trim();
        gen = cleanField(parts[7]);
    }
    
    // If we have a name, return the record
    if (name && name.length > 3) {
        return {
            name: name,
            specialty: specialty,
            gen: gen,
            languages: languages,
            address: address,
            lat: lat,
            lng: lng,
            phone: phone
        };
    }
    
    return null;
}

function splitCSVLine(line) {
    const parts = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if ((char === '"' || char === "'") && !inQuotes) {
            inQuotes = true;
            quoteChar = char;
        } else if (char === quoteChar && inQuotes) {
            inQuotes = false;
            quoteChar = '';
        } else if (char === ',' && !inQuotes) {
            parts.push(current);
            current = '';
            continue;
        } else {
            current += char;
        }
    }
    
    parts.push(current);
    return parts;
}

function cleanField(field) {
    return field
        .replace(/^\[/, '')
        .replace(/\]$/, '')
        .replace(/['"]/g, '')
        .replace(/\s*,\s*/g, ', ')
        .trim();
}

// Filter out invalid records
const validDoctors = doctors.filter(doctor => 
    doctor.name && 
    doctor.name.length > 3 && 
    !doctor.name.includes(',') && // Avoid malformed names
    !doctor.name.match(/^\d+$/) // Avoid numeric-only names
);

console.log(`Parsed ${validDoctors.length} valid records`);

// Generate the data
const jsCode = `// Medical facilities data - ${validDoctors.length} facilities
const doctorsData = ${JSON.stringify(validDoctors, null, 2)};

console.log('Total facilities:', doctorsData.length);
`;

fs.writeFileSync('parsed_doctors_data.js', jsCode);

console.log('Generated parsed_doctors_data.js');
console.log('Sample records:');
validDoctors.slice(0, 5).forEach((doctor, i) => {
    console.log(`${i + 1}. ${doctor.name}`);
});
