import React, { useState } from 'react';

interface JoinDirectoryProps {
  currentLang: string;
  translations: any;
}

const JoinDirectory: React.FC<JoinDirectoryProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    languages: '',
    address: '',
    zipcode: '',
    website: '',
    experience: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', specialty: '', languages: '', address: '', zipcode: '', website: '', experience: '', message: ''
      });
    }, 3000);
  };

  const specialties = [
    'Family Medicine', 'Internal Medicine', 'Pediatrics', 'Obstetrics & Gynecology', 'Cardiology', 'Dermatology', 'Orthopedics', 'Psychiatry', 'Neurology', 'Oncology', 'Emergency Medicine', 'Radiology', 'Anesthesiology', 'Surgery', 'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="container">
        <div style={{ textAlign: 'center', padding: '3rem 2rem', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '2rem 0' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
          <h2 style={{ color: '#0369a1', marginBottom: '1rem' }}>Application Submitted!</h2>
          <p style={{ color: '#0c4a6e', fontSize: '1.1rem' }}>
            Thank you for your interest in joining SA MedMatch. We'll review your application and get back to you within 2-3 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <h1 style={{ color: '#dc2626', marginBottom: '1.5rem', textAlign: 'center' }}>
            Join Our Directory
          </h1>
          <p style={{ color: '#374151', textAlign: 'center', marginBottom: '2rem' }}>
            Fill out the application below and we'll reach out shortly.
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Full Name *
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Email Address *
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Phone Number
                </label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Medical Specialty *
                </label>
                <select name="specialty" value={formData.specialty} onChange={handleInputChange} required style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }}>
                  <option value="">Select Specialty</option>
                  {specialties.map(specialty => (<option key={specialty} value={specialty}>{specialty}</option>))}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                Languages Spoken
              </label>
              <input type="text" name="languages" value={formData.languages} onChange={handleInputChange} placeholder="e.g., English, Spanish, Arabic" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                Practice Address *
              </label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} required placeholder="Street address, City, State" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  ZIP Code *
                </label>
                <input type="text" name="zipcode" value={formData.zipcode} onChange={handleInputChange} required pattern="[0-9]{5}" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Website
                </label>
                <input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://yourwebsite.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                Years of Experience
              </label>
              <select name="experience" value={formData.experience} onChange={handleInputChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb' }}>
                <option value="">Select Experience Level</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="16-20">16-20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                Additional Information
              </label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Tell us about your practice, special services, or any other relevant information..." style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '1rem', background: '#f9fafb', resize: 'vertical' }} />
            </div>

            <button type="submit" style={{ background: 'linear-gradient(90deg, #dc2626 60%, #f87171 100%)', color: 'white', border: 'none', borderRadius: '8px', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', boxShadow: '0 2px 8px rgba(220, 38, 38, 0.08)', transition: 'background 0.2s', justifySelf: 'center', minWidth: '200px' }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'linear-gradient(90deg, #b91c1c 60%, #ef4444 100%)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'linear-gradient(90deg, #dc2626 60%, #f87171 100%)'; }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinDirectory;


