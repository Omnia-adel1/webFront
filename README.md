# CampusWise AIU Web Application

## Overview
CampusWise AIU is a React-based web application designed to provide students with a seamless experience for managing their academic and campus-related activities. The application includes features such as account management, transportation schedules, grades, payment tracking, and more.

## Features
- **Account Management**: View and update profile information, settings, and preferences.
- **Transportation**: Check bus schedules, track buses, and view ride history.
- **Grades**: View current grades, search for grades by topic, and calculate cGPA.
- **Payments**: Track payment history, view receipts, and make payments.
- **Help and Support**: Access user guides, FAQs, and contact support.
- **Language Settings**: Switch between English and Arabic.

## Project Structure
The project is organized as follows:

```
web/
├── public/                # Static files
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/                   # Source files
│   ├── Assets/            # Images and other assets
│   ├── Components/        # Reusable components like Navbar and HomeIcon
│   ├── Pages/             # Individual pages like AccountPage, HomePage, etc.
│   ├── Styles/            # CSS files for styling
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point of the application
│   └── reportWebVitals.js # Performance reporting
└── package.json           # Project dependencies and scripts
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Scripts
- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run eject`: Ejects the app configuration (not recommended).

## Dependencies
- React
- React Router DOM
- FontAwesome for icons
- Testing libraries (Jest, React Testing Library)

## Pages
- **SignInPage**: User login.
- **HomePage**: Dashboard with quick access to features.
- **AccountPage**: Manage user profile and settings.
- **Transportation**: View and manage bus schedules and rides.
- **Grades**: Access grade lists, search grades, and view cGPA.
- **Payment**: Manage payments and view receipts.
- **HelpPage**: Access user guides and support.
- **SettingsPage**: Configure personal settings.
- **LanguagePage**: Change application language.

## Styling
The application uses CSS for styling, with a separate CSS file for each page and component. The styles are located in the `src/Styles/` directory.

## Assets
Images and other static assets are stored in the `src/Assets/` directory.

## Testing
The project includes basic tests using Jest and React Testing Library. Tests are located in the `src/` directory.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or support, please contact [support@aiu.edu.eg](mailto:support@aiu.edu.eg).
