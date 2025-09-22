import React, { useMemo } from 'react';

interface OtherResourcesProps {
  currentLang: string;
  translations: any;
}

// Framework-only scaffold: expects a CSV later. Annotated to guide hookup.
// Expected CSV columns (suggested): name, category, description, address, phone, website, lat, lng
// To wire data, create src/data/resources.ts that exports parsed array similar to doctors.ts
// Then import here and replace the placeholder data.

type Resource = {
  name: string;
  category?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
};

const placeholderResources: Resource[] = [
  { name: 'Placeholder Resource A', category: 'Food Assistance', description: 'Short description', address: '123 Main St', phone: '(210) 000-0000', website: 'https://example.com' },
  { name: 'Placeholder Resource B', category: 'Housing', description: 'Short description', address: '456 Elm St', phone: '(210) 111-1111' },
  { name: 'Placeholder Resource C', category: 'Legal Aid', description: 'Short description' },
];

const OtherResources: React.FC<OtherResourcesProps> = () => {
  const resources = useMemo(() => placeholderResources, []);
  const categories = useMemo(() => Array.from(new Set(resources.map(r => r.category).filter(Boolean))).sort(), [resources]);

  return (
    <div className="container">
      <h1 style={{ color: '#dc2626', marginBottom: '1rem' }}>Other Resources</h1>

      {/* Filters scaffold (future): multi-select categories, text search */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div>
          <label style={{ color: '#374151', fontWeight: 600 }}>Categories</label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
            {categories.map(cat => (
              <span key={cat} style={{ background: 'rgba(220,38,38,0.08)', color: '#991b1b', padding: '0.25rem 0.5rem', borderRadius: 6, fontSize: '0.85rem' }}>{cat}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid similar to doctors list */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
        {resources.map((res, idx) => (
          <div key={idx} style={{ background: 'white', borderRadius: 12, padding: '1rem', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{res.name}</h3>
            {res.category && <div style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{res.category}</div>}
            {res.description && <p style={{ color: '#374151', fontSize: '0.95rem' }}>{res.description}</p>}
            {res.address && <div style={{ color: '#374151', fontSize: '0.9rem' }}><strong>Address:</strong> {res.address}</div>}
            {res.phone && <div style={{ color: '#374151', fontSize: '0.9rem' }}><strong>Phone:</strong> {res.phone}</div>}
            {res.website && <div style={{ marginTop: '0.25rem' }}><a href={res.website} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>Website</a></div>}
          </div>
        ))}
      </div>

      {/* How to hook up CSV */}
      <div style={{ marginTop: '2rem', color: '#374151' }}>
        <h3 style={{ color: '#dc2626' }}>Hooking up your CSV</h3>
        <ol>
          <li>Create <code>src/data/resources_raw.ts</code> exporting <code>RESOURCES_CSV</code> string.</li>
          <li>Parse with <code>parseCSVToObjects</code> from <code>src/data/csv.ts</code>.</li>
          <li>Map objects to a <code>Resource</code> shape in <code>src/data/resources.ts</code>.</li>
          <li>Import the array here and replace <code>placeholderResources</code>.</li>
        </ol>
      </div>
    </div>
  );
};

export default OtherResources;


