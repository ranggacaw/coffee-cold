# Coffee Cold

Coffee Cold is a React-based web application designed to provide a modern and dynamic interface. This project leverages Firebase for backend services, React Router DOM for navigation, and Tailwind CSS for efficient styling.

## Features
- **React**: Utilizes React v19 for building user interfaces.
- **Firebase**: Provides backend services such as authentication and database.
- **React Router DOM**: Enables seamless client-side routing.
- **Tailwind CSS**: Implements utility-first CSS for rapid UI development.
- **Material-UI (MUI)**: Enhances UI with pre-designed components and icons.

---

## Getting Started
Follow these steps to set up the project on your local machine.

### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ranggacaw/coffee-cold.git
   ```

2. Navigate to the project directory:
   ```bash
   cd coffee-cold
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the development server:
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure
```
coffee-cold/
|-- src/
|   |-- components/  # Reusable React components
|   |-- pages/       # Page-level components
|   |-- styles/      # Tailwind CSS and global styles
|   |-- firebase.js  # Firebase configuration
|-- public/          # Static assets
|-- package.json     # Project metadata and dependencies
```

---

## Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration to a `firebase.js` file in the `src/` folder:
   ```javascript
   import { initializeApp } from 'firebase/app';

   const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
   };

   const app = initializeApp(firebaseConfig);
   export default app;
   ```

---

## Scripts
The following npm scripts are available:
- `start`: Starts the development server.
- `build`: Builds the app for production.
- `test`: Runs tests using React Testing Library.
- `eject`: Ejects the configuration (use with caution).

---

## Dependencies
Here is a list of major dependencies used in this project:

### Core Dependencies
- `react`: ^19.0.0
- `react-router-dom`: ^7.0.2
- `firebase`: ^11.1.0
- `tailwindcss`: ^3.4.16

### Styling Dependencies
- `@mui/material`: ^6.2.0
- `@emotion/react`: ^11.14.0
- `styled-components`: ^6.1.13

### Testing Dependencies
- `@testing-library/react`: ^13.4.0
- `@testing-library/jest-dom`: ^5.17.0

---

## Development Notes
- **Tailwind CSS**: You can customize Tailwind in the `tailwind.config.js` file.
- **Firebase**: Ensure the Firebase credentials are stored securely and never commit them to source control.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contributing
We welcome contributions! Feel free to fork the repository and submit a pull request.

---

## Author
[Your Name](https://github.com/ranggacaw)

---

Happy coding!
