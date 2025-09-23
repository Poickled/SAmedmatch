// Complete medical facilities data
const doctorsData = [
  {
    "name": "San Antonio",
    "specialty": "78212, [English], 29.4402731, -98.4905771, , [Neurology",
    "gen": "Pain Management], ,",
    "languages": "Physical Therapy",
    "address": "'Sports Medicine'",
    "lat": "'Orthopedics'",
    "lng": "'Dermatology'",
    "phone": "'Rheumatology'"
  },
  {
    "name": "CentroMed City Center Clinic",
    "specialty": "[Pediatrics, Behavioral Health, Counseling, Family Medicine, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Well-child check-ups, Routine follow-up care, Vision & Hearing Screenings, Allergy Treatment, HIV Services, Lab Services, Nutrition Services, HIV Pre-Exposure Prophylaxis (PrEP), Referrals to Specialist]",
    "gen": "[Pediatrics, Behavioral Health, Family Medicine, Physicals, Immunizations, Lab Services, Nutrition Services, Referrals]",
    "languages": "English",
    "address": "",
    "lat": "",
    "lng": "",
    "phone": ""
  },
  {
    "name": "CENTROMED FAMILY MEDICINE CLINIC",
    "specialty": "",
    "gen": "",
    "languages": "English",
    "address": "",
    "lat": "",
    "lng": "",
    "phone": ""
  },
  {
    "name": "Devine Behavioral Health",
    "specialty": "[Medical, Dental, Wellness Gym]",
    "gen": "[Medical, Dental, Wellness]",
    "languages": "English",
    "address": "\"1010 W. Hondo Ave, Devine, Texas 78016\"",
    "lat": "29.1472609",
    "lng": "-98.9160889",
    "phone": ""
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78229, [English], 29.5003126, -98.5770904, (210) 233-7175, [Pediatrics",
    "gen": "Womens Health, Immunizations, Patient Education], ,",
    "languages": "Developmental Checkups",
    "address": "'Well-Child Visits'",
    "lat": "'Acute Care'",
    "lng": "'Teen Health'",
    "phone": "'ADHD Care'"
  },
  {
    "name": "\",\"['Pediatrics'",
    "specialty": "Well-Child Visits",
    "gen": "Chronic Disease Management",
    "languages": "Acute Care",
    "address": "'Developmental Checkups'",
    "lat": "'Teen Health'",
    "lng": "'ADHD Care'",
    "phone": "'Behavioral Health'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78251, [English], , , (210) 942-5855, [Acute Care",
    "gen": "Pediatrics",
    "languages": "Chronic Disease Management",
    "address": "'Adult Medicine'",
    "lat": "'Immunizations'",
    "lng": "'Nutrition'",
    "phone": "'Patient Education'"
  },
  {
    "name": "CommuniCare Health Centers - Allergy Institute",
    "specialty": "Allergy",
    "gen": "Allergy",
    "languages": "English",
    "address": "\"4456 Lockhill-Selma Rd, Suite 103, San Antonio, TX 78249\"",
    "lat": "29.5842882",
    "lng": "-98.5705676",
    "phone": "(210) 455-2000"
  },
  {
    "name": "Apollo Wellness",
    "specialty": "[HIV/STI Testing, STI Treatment, PrEP Prescriptions and Management (In-Person or Virtual Visits), PEP Prescriptions, DoxyPEP Prescriptions, Sexual Health Education, Chronic Disease Management, Immunizations, Physicals, STD/HIV Testing and Treatment, Hepatitis B and Hepatitis C Evaluations, Counseling]",
    "gen": "[STD/HIV Testing, PrEP/PEP, Chronic Disease Management, Immunizations, Physicals, Patient Education]",
    "languages": "English",
    "address": "\"6511 W Loop 1604 N, Ste. 105, San Antonio, TX\"",
    "lat": "",
    "lng": "",
    "phone": "9726) 224-3438"
  },
  {
    "name": "CommuniCare Health Centers - Encino Park",
    "specialty": "[Pediatrics, Teen Health, Adult Medicine, Senior Care, Immunizations, Patient Health Education, Chronic Disease Management]",
    "gen": "[Pediatrics, Teen Health, Adult Medicine, Senior Care, Immunizations, Patient Education, Chronic Disease Management]",
    "languages": "English",
    "address": "\"20306 Encino Ledge, Ste. 101 and 103 San Antonio, TX 78259\"",
    "lat": "",
    "lng": "",
    "phone": "(210) 233-7000"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78223, [English], , , (210) 644-7951, [Medical History",
    "gen": "Ongoing Care], ,",
    "languages": "Mental Health",
    "address": "'Physical Exams'",
    "lat": "'Vaccinations'",
    "lng": "'Lab Tests'",
    "phone": "'Pregnancy Care'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78207, [English], 29.4311904, -98.5023459, (210) 358-3400, [Pediatric Primary Care",
    "gen": "Radiology",
    "languages": "Specialties",
    "address": "'Adult Primary Care'",
    "lat": "'Walk-In Care'",
    "lng": "'Outpatient Surgery'",
    "phone": "'Pharmacy'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78221, [English], 29.345074, -98.487128, (210) 358-8255, [Adult Primary Care",
    "gen": "Pulmonology",
    "languages": "Arthritis Care",
    "address": "'Pediatric Primary Care'",
    "lat": "'Behavioral Health'",
    "lng": "'Imaging & Radiology'",
    "phone": "'Lab Services'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78237, [English], , , (210) 358-5100, [Adult Primary Care",
    "gen": "Pediatric Imaging",
    "languages": "Behavioral Health",
    "address": "'Pediatric Primary Care'",
    "lat": "'Gynecology'",
    "lng": "'Imaging & Radiology'",
    "phone": "'Lab Services'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78233, [English], 29.5368364, -98.3953294, (210) 644-4400, [Dental",
    "gen": "Ophthalmology",
    "languages": "Surgery",
    "address": "'ENT'",
    "lat": "'Gynecology'",
    "lng": "'Hand'",
    "phone": "'Neurology'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78207, [English], 29.4219684, -98.5288723, (210) 358-7000, [Adult Endocrinology",
    "gen": "Wound Care",
    "languages": "Kidney Care",
    "address": "'Pediatric Endocrinology'",
    "lat": "'Podiatry'",
    "lng": "'Orthopedics'",
    "phone": "'Rehabilitation'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78229, [English], 29.5078264, -98.5780943, (210) 358-4000, [Anesthesiology",
    "gen": "Clinical Trials",
    "languages": "Behavioral Health",
    "address": "'Bariatric'",
    "lat": "'Hematology'",
    "lng": "'Neurology & Spine'",
    "phone": "'Cancer Care'"
  },
  {
    "name": "San Antonio",
    "specialty": "TX 78229, [English], 29.5078264, -98.5780943, (210) 358-4000, [Gynecology",
    "gen": "Pregnancy & Childbirth",
    "languages": "Pediatric Emergency",
    "address": "'NICU'",
    "lat": "'Pediatric Cardiology'",
    "lng": "'Pediatric Supportive Care'",
    "phone": "'Pediatric Surgery'"
  }
];

console.log('Total facilities:', doctorsData.length);
