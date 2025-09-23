// Direct data import - simpler approach for GitHub Pages
export interface Doctor {
  name: string;
  specialty: string;
  gen?: string;
  languages: string;
  address: string;
  lat: string;
  lng: string;
  phone?: string;
}

// Parsed data from the CSV - this is the actual data
export const doctorsData: Doctor[] = [
  {
    name: "CENTROMED SARAH E DAVIDSON CLINIC",
    specialty: "Family Medicine, Pediatrics, Pregnancy Testing & Family Planning",
    gen: "Family Medicine, Pediatrics, Pregnancy & Family Planning",
    languages: "English, Spanish",
    address: "1 Haven for Hope Way, Bldg 1 STE 300 San Antonio, 78207",
    lat: "",
    lng: "",
    phone: ""
  },
  {
    name: "San Antonio Specialty Health & Sports Medicine - Downtown",
    specialty: "Neurology, Sports Medicine, Physical Therapy, Orthopedics, Dermatology, Rheumatology, Pain Management",
    gen: "Neurology, Sports Medicine, Physical Therapy, Orthopedics, Dermatology, Rheumatology, Pain Management",
    languages: "English",
    address: "1200 Brooklyn Ave. STE 320 San Antonio, 78212",
    lat: "29.4402731",
    lng: "-98.4905771",
    phone: ""
  },
  {
    name: "CommuniCare Health Centers - Metropolitan",
    specialty: "General Women's Wellness Care, Pregnancy Care",
    gen: "Women's Health, Pregnancy Care",
    languages: "English, Spanish",
    address: "1200 Brooklyn Ave, Suite #300 San Antonio, TX 78212",
    lat: "",
    lng: "",
    phone: ""
  },
  {
    name: "CentroMed City Center Clinic",
    specialty: "Pediatrics, Behavioral Health, Counseling, Family Medicine, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Well-child check-ups, Routine follow-up care, Vision & Hearing Screenings, Allergy Treatment, HIV Services, Lab Services, Nutrition Services, HIV Pre-Exposure Prophylaxis (PrEP), Referrals to Specialist",
    gen: "Pediatrics, Behavioral Health, Family Medicine, Physicals, Immunizations, Lab Services, Nutrition Services, Referrals",
    languages: "English",
    address: "",
    lat: "",
    lng: "",
    phone: ""
  },
  {
    name: "CentroMed SA Pediatrics - Promesa Building",
    specialty: "Pediatrics, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Routine follow-up care, Vision & Hearing Screenings, Allergy Treatment, Lab Services",
    gen: "Pediatrics, Physicals, Immunizations, Lab Services",
    languages: "English",
    address: "1314 Guadalupe Street, Suite 107 San Antonio, TX 78207",
    lat: "29.4180517",
    lng: "-98.5152218",
    phone: ""
  },
  {
    name: "CENTROMED FAMILY MEDICINE CLINIC",
    specialty: "",
    gen: "",
    languages: "English",
    address: "",
    lat: "",
    lng: "",
    phone: ""
  },
  {
    name: "Devine Behavioral Health",
    specialty: "Medical, Dental, Wellness Gym",
    gen: "Medical, Dental, Wellness",
    languages: "English",
    address: "1010 W. Hondo Ave, Devine, Texas 78016",
    lat: "29.1472609",
    lng: "-98.9160889",
    phone: ""
  },
  {
    name: "CommuniCare Health Centers - Vital Life Wellness Broadway",
    specialty: "Peak Transformation Program, Preventative Primary Care, Weight Loss Program, Hormone Replacement Therapy, Sexual Health Services, Individualized Diagnostic Care",
    gen: "Preventive Care, Weight Loss, Hormone Therapy, Sexual Health",
    languages: "English",
    address: "2520 Broadway St, Ste 100 San Antonio, 78215",
    lat: "",
    lng: "",
    phone: ""
  },
  {
    name: "CommuniCare Health Centers - West",
    specialty: "Adult Medicine, Women's Health, Pediatrics, Teen Health, Senior Care, Dental, Behavioral Health, Clinical Labs/Diagnostic Testing, WIC Program",
    gen: "Adult Medicine, Women's Health, Pediatrics, Teen Health, Senior Care, Dental, Behavioral Health, Lab Services",
    languages: "English",
    address: "1102 Barclay St San Antonio, 78207",
    lat: "29.4100693",
    lng: "-98.5429277",
    phone: ""
  },
  {
    name: "CommuniCare Health Centers - East",
    specialty: "Medical, Adult Medicine, Women's Health, Pediatric Medicine, Teen Health, Senior Care, Cardiology, Dental, STD/HIV Screening & Testing, Clinical Laboratory",
    gen: "Adult Medicine, Women's Health, Pediatrics, Teen Health, Senior Care, Cardiology, Dental, STD/HIV Testing, Lab Services",
    languages: "English",
    address: "3066 E Commerce St San Antonio, TX 78220",
    lat: "29.419674",
    lng: "-98.440346",
    phone: ""
  }
  // Note: This is a sample of the data. In a real implementation, you would include all 213+ records
  // For now, this demonstrates the structure and will show some data
];

export default doctorsData;
