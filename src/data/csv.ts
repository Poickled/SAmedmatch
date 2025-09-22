// Minimal CSV parser that handles quoted fields and commas
export function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let i = 0;
  const n = text.length;
  let field = '';
  let row: string[] = [];
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = '';
  };
  const pushRow = () => {
    // ignore empty trailing rows
    if (row.length > 0 && !(row.length === 1 && row[0].trim() === '')) {
      rows.push(row);
    }
    row = [];
  };

  while (i < n) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        // handle escaped quotes
        if (i + 1 < n && text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        } else {
          inQuotes = false;
          i++;
          continue;
        }
      } else {
        field += ch;
        i++;
        continue;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
        continue;
      }
      if (ch === ',') {
        pushField();
        i++;
        continue;
      }
      if (ch === '\r') {
        i++;
        continue;
      }
      if (ch === '\n') {
        pushField();
        pushRow();
        i++;
        continue;
      }
      field += ch;
      i++;
    }
  }
  // flush last field/row
  pushField();
  pushRow();
  return rows;
}

export function parseCSVToObjects<T extends Record<string, any>>(text: string): T[] {
  const rows = parseCSV(text);
  if (rows.length === 0) return [];
  const headers = rows[0].map((h) => h.trim());
  const out: T[] = [];
  for (let r = 1; r < rows.length; r++) {
    const vals = rows[r];
    if (vals.every((v) => v.trim() === '')) continue;
    const obj: any = {};
    for (let c = 0; c < headers.length; c++) {
      const key = headers[c] || `col${c}`;
      obj[key] = (vals[c] ?? '').trim();
    }
    out.push(obj as T);
  }
  return out;
}
