// Import the full CSV content from the actual file
import { readFileSync } from 'fs';
import { join } from 'path';

// Read the full CSV file content
const csvPath = join(__dirname, 'doctors_cleaned.csv');
export const DOCTORS_CLEANED_CSV = readFileSync(csvPath, 'utf-8');

export default DOCTORS_CLEANED_CSV;

