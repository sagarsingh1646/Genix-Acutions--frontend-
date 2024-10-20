
# Genix Auctions 

This project is a Vite React app showcasing a bidding system with Firebase Cloud Messaging (FCM) integration for notifications. The app demonstrates the process of sending notifications when a higher bid is placed.

## Features
- Real-time notifications using Firebase Cloud Messaging (FCM)
- React and Tailwind CSS for the frontend
- Bidding system that only allows placing bids higher than the current bid

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Vite](https://vitejs.dev/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Add Firebase API Keys

Note: You can directly clone this project, no need to add FCM keys in env file as already give one test api KEY.

To integrate Firebase Cloud Messaging (FCM) for notifications, you need to set up Firebase. Here, I provided a test API key for demonstration purposes. You can also use your own Firebase project by following these steps.

#### Option 1: Use the provided test API key

In the root directory, create a `.env` file and add the following environment variables:

```env
VITE_FIREBASE_API_KEY=YOUR_TEST_API_KEY_HERE
VITE_FIREBASE_AUTH_DOMAIN=YOUR_TEST_AUTH_DOMAIN_HERE
VITE_FIREBASE_PROJECT_ID=YOUR_TEST_PROJECT_ID_HERE
VITE_FIREBASE_STORAGE_BUCKET=YOUR_TEST_STORAGE_BUCKET_HERE
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_TEST_SENDER_ID_HERE
VITE_FIREBASE_APP_ID=YOUR_TEST_APP_ID_HERE
```

#### Option 2: Set up your own Firebase project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add a web app to your project.
4. Copy the Firebase SDK configuration and replace the values in your `.env` file.

### 4. Run the app

To start the development server, use the following command:

```bash
npm run dev
```

This will start the Vite development server. You can now access the app by navigating to `http://localhost:3000` in your browser.

### 5. Build for production

To build the app for production, use the following command:

```bash
npm run build
```

This will generate optimized production files in the `dist` folder.

### 6. Firebase Notification Demo

To see the notification demo in action:

1. Open the app in multiple tabs or devices.
2. Place a higher bid in one tab or device.
3. The other tabs/devices will receive a notification via Firebase Cloud Messaging (FCM).


## Scripts

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.

## License

This project is licensed under the MIT License.
