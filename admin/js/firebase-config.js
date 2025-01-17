// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAySAlcdqYUOVBkEpe9SIA_L8em8YJJTNA",
    authDomain: "techentrance-official.firebaseapp.com",
    projectId: "techentrance-official",
    storageBucket: "techentrance-official.firebasestorage.app",
    messagingSenderId: "299010534020",
    appId: "1:299010534020:web:112cf2384901930a8f70d1",
    measurementId: "G-9FRH86ESJ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firestore instance
const db = firebase.firestore();
const storage = firebase.storage();

// Collection reference
const applicationsRef = db.collection('internship_applications'); 