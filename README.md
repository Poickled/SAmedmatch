# SA MedMatch React Application

## Overview
SA MedMatch is a web application designed to help users find doctors based on various criteria such as name, specialty, language, and location. The application features a user-friendly interface with a search bar, a list of doctors, and a map view to visualize doctor locations.

## Features
- Search for doctors by name, specialty, language, and ZIP code.
- View doctors in a list format or on a map.
- Language switcher to support multiple languages.
- Display of general locations and services.

## Project Structure
```
sa-medmatch-react
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components          # Contains all React components
│   │   ├── Header.tsx      # Header component with logo and language switcher
│   │   ├── SearchBar.tsx    # Search bar component for filtering doctors
│   │   ├── DoctorList.tsx   # Component to display a list of doctors
│   │   ├── DoctorCard.tsx    # Component for individual doctor information
│   │   ├── MapView.tsx      # Component to display doctor locations on a map
│   │   ├── LocationList.tsx  # Component to display general locations and services
│   │   └── ViewToggle.tsx    # Component to toggle between list and map views
│   ├── assets               # Contains static assets like images
│   │   └── logo.png        # Logo image for the application
│   ├── data                 # Contains CSV files with doctor and location data
│   │   ├── doctors.csv      # CSV file with doctor information
│   │   └── locations.csv    # CSV file with location information
│   ├── translations         # Contains translation strings for different languages
│   │   └── index.ts        # Translation strings
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the React application
│   └── styles               # Contains CSS styles for the application
│       └── main.css        # Main CSS file
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd sa-medmatch-react
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
The build artifacts will be stored in the `build` directory.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.