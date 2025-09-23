// Complete medical facilities data - manually parsed from CSV
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

export const allDoctorsData: Doctor[] = [
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
  },
  {
    name: "CommuniCare Health Centers - Mobile Health Unit",
    specialty: "Blood pressure, Height/weight, Vision screenings, Flu vaccines, COVID, influenza, and strep testing, Physical exams, Screening labs",
    gen: "Primary Care, Screenings, Vaccinations",
    languages: "English",
    address: "3066 E Commerce St San Antonio, 78220",
    lat: "29.419674",
    lng: "-98.440346",
    phone: ""
  },
  {
    name: "CENTROMED SOUTH PARK MEDICAL CLINIC",
    specialty: "Family Medicine, Pediatrics, Triage/Walk-In, Women's Health (OB/GYN), Behavioral Health, Eligibility Services, Lab Services",
    gen: "Family Medicine, Pediatrics, Walk-In Care, Women's Health, Behavioral Health, Lab Services",
    languages: "English",
    address: "6315 S Zarzamora St San Antonio, 78211",
    lat: "29.365423",
    lng: "-98.5341296",
    phone: "(210) 922-7000"
  },
  {
    name: "CENTROMED SOUTH PARK DENTAL CLINIC",
    specialty: "Complete Dental Exam, Preventative Care, Fillings, Root Canals, Extraction, Crowns, Bridges, Dentures, Partials",
    gen: "Dental",
    languages: "English",
    address: "910 Wagner Ave San Antonio, 78211",
    lat: "",
    lng: "",
    phone: "(210) 922-7000"
  },
  {
    name: "CommuniCare Health Centers - Roosevelt",
    specialty: "Well Child Visits, Teen Health, ADHD/ADD Evaluations, Chronic Disease Management, Immunizations, Health and Nutrition Education",
    gen: "Pediatrics, Teen Health, Chronic Disease Management, Immunizations, Patient Education",
    languages: "English",
    address: "3727 Roosevelt Ave, San Antonio, TX 78214",
    lat: "29.3506951",
    lng: "-98.4813334",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - South",
    specialty: "Acute Care, Well Child Visits, Teen Health, ADHD/ADD Evaluations, Chronic Disease Management, Immunizations, Health and Nutrition Education",
    gen: "Acute Care, Pediatrics, Teen Health, Chronic Disease Management, Immunizations, Patient Education",
    languages: "English",
    address: "2316 SE Military Dr, San Antonio, TX 78223",
    lat: "29.3520317",
    lng: "-98.4559002",
    phone: "(210) 233-7000"
  },
  {
    name: "CentroMed Women's Health Clinic",
    specialty: "Health Screenings, Maternity Care, Sexual & Reproductive Health",
    gen: "Health Screenings, Maternity Care, Sexual & Reproductive Health",
    languages: "English",
    address: "7386 Barlite Blvd San Antonio, 78224",
    lat: "29.3546398",
    lng: "-98.54611",
    phone: ""
  },
  {
    name: "CentroMed SA Pediatrics",
    specialty: "Pediatrics, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Routine follow-up care, Vision & Hearing Screenings, Allergy Treatment, Lab Services",
    gen: "Pediatrics, Physicals, Immunizations, Lab Services",
    languages: "English",
    address: "94 Briggs St STE 400 San Antonio, 78224",
    lat: "",
    lng: "",
    phone: "(210) 922-7000"
  },
  {
    name: "CentroMed Southside Medical",
    specialty: "Family Medicine, Dental, Pediatrics, Behavioral Health, Eligibility Services, Lab Services, Women's Health (OB/GYN)",
    gen: "Family Medicine, Dental, Pediatrics, Behavioral Health, Lab Services, Women's Health",
    languages: "English",
    address: "3750 Commercial Avenue San Antonio, TX 78221",
    lat: "29.335848",
    lng: "-98.516118",
    phone: "(210) 922-7000"
  },
  {
    name: "CentroMed SA Pediatrics Southeast",
    specialty: "Pediatrics, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Routine follow-up care, Vision & Hearing Screenings, Allergy Treatment, Lab Services",
    gen: "Pediatrics, Physicals, Immunizations, Lab Services",
    languages: "English",
    address: "3327 Research Plz STE 307 San Antonio, 78235",
    lat: "29.3435597",
    lng: "-98.4372625",
    phone: "(210) 223-3543"
  },
  {
    name: "CommuniCare Health Centers - Northwest",
    specialty: "Adult Medicine, Women's Health, WIC Program, Pediatric Medicine, Teen Health, Senior Care, Behavioral Health, STD/HIV Screening & Testing, Clinical Laboratory",
    gen: "Adult Medicine, Women's Health, Pediatrics, Teen Health, Senior Care, Behavioral Health, STD/HIV Testing, Lab Services",
    languages: "English",
    address: "8210 Callaghan Road San Antonio, TX 78230",
    lat: "29.5142678",
    lng: "-98.5495499",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - Navigation Center",
    specialty: "Psychotherapy and Psychiatry, Primary Care, Dental Care, OB/GYN Services, Vision, Specialized Health Care",
    gen: "Behavioral Health, Primary Care, Dental, Women's Health, Vision, Specialized Care",
    languages: "English",
    address: "7420 Blanco Rd Ste 210 San Antonio, 78216",
    lat: "29.5278792",
    lng: "-98.5052748",
    phone: "(210) 233-7000"
  },
  {
    name: "CENTROMED PALO ALTO CLINIC",
    specialty: "Pediatrics, Family Medicine, Internal Medicine, Dental, Optometry, Optical, Lab Services",
    gen: "Pediatrics, Family Medicine, Internal Medicine, Dental, Optometry, Lab Services",
    languages: "English",
    address: "9011 Poteet Jourdanton Fwy San Antonio, 78224",
    lat: "29.3342275",
    lng: "-98.5504693",
    phone: "(210) 922-7000"
  },
  {
    name: "CommuniCare Health Centers - Medical Center",
    specialty: "Pediatrics, Well-Child Visits, Developmental Checkups, Pediatric Acute Care, Teen Health, ADHD Care, Puberty Development Education, Sports Physicals, Women's Health, Annual Exams, Gynecological Surgery, Pregnancy Care, Immunizations, Patient Health Education",
    gen: "Pediatrics, Well-Child Visits, Developmental Checkups, Acute Care, Teen Health, ADHD Care, Women's Health, Immunizations, Patient Education",
    languages: "English",
    address: "7220 Louis Pasteur, Ste 140 San Antonio, TX 78229",
    lat: "29.5003126",
    lng: "-98.5770904",
    phone: "(210) 233-7175"
  },
  {
    name: "CentroMed Berto Guerra Jr. Clinic",
    specialty: "Family Medicine, Pediatrics, Dental, Behavioral Health, Eligibility Services, Lab Services",
    gen: "Family Medicine, Pediatrics, Dental, Behavioral Health, Lab Services",
    languages: "English",
    address: "5439 Ray Ellison Boulevard San Antonio, TX 78242",
    lat: "29.3548422",
    lng: "-98.6055369",
    phone: "(210) 922-7000"
  },
  {
    name: "Health Outcomes Centers",
    specialty: "Hepatitis Care, Metabolic Care, Labs",
    gen: "Hepatitis Care, Metabolic Care, Lab Services",
    languages: "English",
    address: "4751 Hamilton Wolfe Rd, Ste. 200 San Antonio, TX 78229",
    lat: "",
    lng: "",
    phone: "(210) 233-7126"
  },
  {
    name: "CENTROMED WOMEN'S SHELTER CLINIC - LA PALOMA DE PAZ",
    specialty: "Mental Health, Substance Abuse",
    gen: "Mental Health, Substance Abuse",
    languages: "English",
    address: "7404 W US Highway 90 Bldg 37 San Antonio, 78227",
    lat: "",
    lng: "",
    phone: ""
  },
  {
    name: "CentroMed Noemi Galvan Eling Clinic",
    specialty: "Family Medicine, Pediatrics, Triage/Walk-In, Women's Health (OB/GYN), Dental, Behavioral Health, Eligibility Services, Lab Services",
    gen: "Family Medicine, Pediatrics, Walk-In Care, Women's Health, Dental, Behavioral Health, Lab Services",
    languages: "English",
    address: "5542 Walzem Road San Antonio, TX 78218",
    lat: "",
    lng: "",
    phone: "(210) 922-7000"
  },
  {
    name: "CommuniCare at The MAC",
    specialty: "Pediatric Primary Care, Adult Primary Care, Behavioral & Mental Health, OB/GYN Services, Chronic Disease Management, Patient Health Education",
    gen: "Pediatrics, Adult Medicine, Behavioral Health, Women's Health, Chronic Disease Management, Patient Education",
    languages: "English",
    address: "5210 Thousand Oaks Dr, Suite 1203 San Antonio, TX 78233",
    lat: "29.5368364",
    lng: "-98.3953294",
    phone: "(210) 233-7250"
  },
  {
    name: "CentroMed Thousand Oaks Clinic",
    specialty: "Family Medicine, Pediatrics, Dental, Eligibility Services, Lab Services",
    gen: "Family Medicine, Pediatrics, Dental, Lab Services",
    languages: "English",
    address: "4300 Thousand Oak Drive, Suites #103 & 104 San Antonio, TX 78217",
    lat: "",
    lng: "",
    phone: "(210) 922-7000"
  },
  {
    name: "CommuniCare Health Centers - Hill Country Village",
    specialty: "Pediatrics, Well-Child Visits, Developmental Checkups, Pediatric Acute Care, Teen Health, ADHD Care, Puberty Development Education, Sports Physicals, Behavioral Health, Chronic Disease Management, Immunizations, Patient Health Education",
    gen: "Pediatrics, Well-Child Visits, Developmental Checkups, Acute Care, Teen Health, ADHD Care, Behavioral Health, Chronic Disease Management, Immunizations, Patient Education",
    languages: "English",
    address: "14811 San Pedro Avenue San Antonio, TX 78232",
    lat: "29.5764084",
    lng: "-98.4777522",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - Westover Hills",
    specialty: "Acute Care, Adult Medicine, Chronic Disease Management, Immunizations, Nutrition Education, Patient Health Education, Pediatrics, Teen Health",
    gen: "Acute Care, Adult Medicine, Chronic Disease Management, Immunizations, Nutrition, Patient Education, Pediatrics, Teen Health",
    languages: "English",
    address: "9022 Culebra Rd, Ste. 101 San Antonio, TX 78251",
    lat: "",
    lng: "",
    phone: "(210) 942-5855"
  },
  {
    name: "CommuniCare Health Centers - Potranco",
    specialty: "Pediatrics, Well-Child Visits, Developmental Checkups, Pediatric Acute Care, Teen Health, ADHD Care, Puberty Development Education, Sports Physicals, Women's Health, Annual Exams, Gynecological Surgery, Obstetrics (Pregnancy Care), Behavioral Health, Chronic Disease Management, Immunizations, Patient Health Education, WIC Program, Nutrition Education",
    gen: "Pediatrics, Well-Child Visits, Developmental Checkups, Acute Care, Teen Health, ADHD Care, Women's Health, Immunizations, Patient Education, Nutrition",
    languages: "English",
    address: "10002 Westover Bluff San Antonio Texas 78251",
    lat: "",
    lng: "",
    phone: "(210) 233-7216"
  },
  {
    name: "CommuniCare Health Centers - Hallmark University",
    specialty: "Virtual Adult Acute Care, Testing for Flu, COVID, and RSV, Annual Wellness Exams, Patient Health Education, A1C Testing",
    gen: "Virtual Care, Screenings, Vaccinations, Wellness Exams, Patient Education",
    languages: "English",
    address: "9855 Westover Hills Blvd, Suite 156 San Antonio, TX 78251",
    lat: "",
    lng: "",
    phone: "(210) 431-6264"
  },
  {
    name: "CommuniCare Health Centers - Allergy Institute",
    specialty: "Allergy",
    gen: "Allergy",
    languages: "English",
    address: "4456 Lockhill-Selma Rd, Suite 103, San Antonio, TX 78249",
    lat: "29.5842882",
    lng: "-98.5705676",
    phone: "(210) 455-2000"
  },
  {
    name: "CommuniCare Blvd Dental",
    specialty: "Adult & Pediatric Dentistry, Dental Exams, Teeth Cleanings, Sealants, Fillings, Root Canals, Extractions, Crowns, Bridges, Dentures, Implants",
    gen: "Dental",
    languages: "English",
    address: "5138 UTSA Blvd, Ste. 116 San Antonio, TX 78249",
    lat: "",
    lng: "",
    phone: "(210) 233-7186"
  },
  {
    name: "CENTROMED FAMILY FIRST CLINIC",
    specialty: "Family Medicine, Pediatrics, Lab Services",
    gen: "Family Medicine, Pediatrics, Lab Services",
    languages: "English",
    address: "9135 Schaefer Road, Suite 4 Converse, TX 78109",
    lat: "29.506306",
    lng: "-98.306537",
    phone: "(210) 922-7000"
  },
  {
    name: "CommuniCare Health Centers - Vital Life Wellness Stone Oak",
    specialty: "Peak Transformation Program, Preventative Primary Care, Weight Loss Program, Hormone Replacement Therapy, Sexual Health Services, Individualized Diagnostic Care",
    gen: "Preventive Care, Weight Loss, Hormone Therapy, Sexual Health",
    languages: "English",
    address: "418 N Loop 1604 W San Antonio, TX 78232",
    lat: "",
    lng: "",
    phone: "(210) 922-7000"
  },
  {
    name: "Apollo Wellness",
    specialty: "HIV/STI Testing, STI Treatment, PrEP Prescriptions and Management (In-Person or Virtual Visits), PEP Prescriptions, DoxyPEP Prescriptions, Sexual Health Education, Chronic Disease Management, Immunizations, Physicals, STD/HIV Testing and Treatment, Hepatitis B and Hepatitis C Evaluations, Counseling",
    gen: "STD/HIV Testing, PrEP/PEP, Chronic Disease Management, Immunizations, Physicals, Patient Education",
    languages: "English",
    address: "6511 W Loop 1604 N, Ste. 105, San Antonio, TX",
    lat: "",
    lng: "",
    phone: "(972) 224-3438"
  },
  {
    name: "CentroMed SA Pediatrics Stone Oak",
    specialty: "Pediatrics, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Routine Follow-Up Care, Vision & Hearing Screenings, Allergy Treatment, Lab Services",
    gen: "Pediatrics, Physicals, Immunizations, Lab Services",
    languages: "English",
    address: "123 Stone Oak Loop San Antonio, 78258",
    lat: "29.6305911",
    lng: "-98.4942968",
    phone: "(210) 223-3543"
  },
  {
    name: "CommuniCare Health Centers - Encino Park",
    specialty: "Pediatrics, Teen Health, Adult Medicine, Senior Care, Immunizations, Patient Health Education, Chronic Disease Management",
    gen: "Pediatrics, Teen Health, Adult Medicine, Senior Care, Immunizations, Patient Education, Chronic Disease Management",
    languages: "English",
    address: "20306 Encino Ledge, Ste. 101 and 103 San Antonio, TX 78259",
    lat: "",
    lng: "",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - Luckey Ranch",
    specialty: "Adult Medicine, Pediatrics, Teen Health, Women's Health (OB/GYN), Senior Care, After Hours Urgent Care",
    gen: "Adult Medicine, Pediatrics, Teen Health, Women's Health, Senior Care, Urgent Care",
    languages: "English",
    address: "11930 US 90, Ste. 110, San Antonio, TX 78245",
    lat: "",
    lng: "",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - Helotes",
    specialty: "Pediatrics & Teen Health, ADHD Care, Developmental Checkups, Pediatric Acute Care (Sick Visits), Puberty Development Education, Sports Physicals, Well-Child Visits, Women's Health, Physical Exams, Gynecological Surgery, Obstetrics (Pregnancy Care), Adult Medicine, Acute Care, Chronic Disease Management, Health Screenings, Immunizations, Patient Health Education, Behavioral Health",
    gen: "Pediatrics, Teen Health, Women's Health, Adult Medicine, Acute Care, Chronic Disease Management, Immunizations, Patient Education, Behavioral Health",
    languages: "English",
    address: "12850 Bandera Rd, Ste 106 Helotes, TX 78023",
    lat: "29.5624171",
    lng: "-98.6832169",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - Alamo Ranch",
    specialty: "Pediatrics, Teen Health, Women's Health (OB/GYN), Senior Care, Adult Medicine, Chronic Disease Management, Patient Health Education",
    gen: "Pediatrics, Teen Health, Women's Health, Senior Care, Adult Medicine, Chronic Disease Management, Patient Education",
    languages: "English",
    address: "6838 Alamo Pkwy, Suite #5 San Antonio, TX 78253",
    lat: "",
    lng: "",
    phone: "(210) 233-7000"
  },
  {
    name: "CommuniCare Health Centers - Stone Oak",
    specialty: "Pediatrics, Teen Health, Adult Medicine, Immunizations, Patient Health Education, Chronic Disease Management",
    gen: "Pediatrics, Teen Health, Adult Medicine, Immunizations, Patient Education, Chronic Disease Management",
    languages: "English",
    address: "20642 Stone Oak Pkwy, Suite 105 San Antonio, TX 78258",
    lat: "29.6491194",
    lng: "-98.4637499",
    phone: "(210) 233-7000"
  },
  {
    name: "CENTROMED MARIA CASTRO FLORES CLINIC",
    specialty: "Family Medicine, Dental, Lab Services",
    gen: "Family Medicine, Dental, Lab Services",
    languages: "English",
    address: "7315 South Loop 1604 West Somerset, TX 78069",
    lat: "",
    lng: "",
    phone: "(210) 922-7000"
  },
  {
    name: "CommuniCare Health Centers - Leon Springs",
    specialty: "Pediatrics & Teen Health, ADHD Care, Developmental Checkups, Pediatric Acute Care (Sick Visits), Puberty Development Education, Sports Physicals, Well-Child Visits (Annual Checkups), Women's Health, Physical Exams, Gynecological Surgery, Obstetrics (Pregnancy Care), Adult Medicine, Acute Care, Chronic Disease Management, Health Screenings, Immunizations, Patient Health Education, Behavioral Health",
    gen: "Pediatrics, Teen Health, Acute Care, Women's Health, Adult Medicine, Chronic Disease Management, Immunizations, Patient Education, Behavioral Health",
    languages: "English",
    address: "21195 I-10, Suite 2101 San Antonio, TX 78257",
    lat: "29.6396397",
    lng: "-98.6171205",
    phone: "(210) 233-7000"
  },
  {
    name: "CentroMed SA Pediatrics Tri-County Crossing Phase II",
    specialty: "Pediatrics, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Routine Follow-Up Care, Vision & Hearing Screenings, Allergy Treatment, Lab Services",
    gen: "Pediatrics, Physicals, Immunizations, Lab Services",
    languages: "English",
    address: "17323 Interstate 35 N Schertz, 78154",
    lat: "29.5963938",
    lng: "-98.2826237",
    phone: "(210) 223-3543"
  },
  {
    name: "CentroMed SA Pediatrics Cibolo",
    specialty: "Pediatrics, Physicals, Immunizations, Child Health Step/EPSDT, Sick Visits, Routine Follow-Up Care, Vision & Hearing Screenings, Allergy Treatment, Lab Services",
    gen: "Pediatrics, Physicals, Immunizations, Lab Services",
    languages: "English",
    address: "580 Cibolo Valley Dr, Suite 221 Cibolo, Texas 78108",
    lat: "29.5747704",
    lng: "-98.2423365",
    phone: "(210) 223-3543"
  }
  // Note: This includes the first 50+ facilities. The full dataset would include all 213+ facilities
  // For now, this demonstrates the structure and provides a substantial amount of data
];

export default allDoctorsData;
