// Admin authentication check
const adminEmails = ['techentrance.in@gmail.com']; // Replace with your admin email

let authCheckComplete = false;

function checkAdminAuth() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            authCheckComplete = true;
            if (user && adminEmails.includes(user.email)) {
                unsubscribe();
                resolve(true);
            } else {
                unsubscribe();
                if (user) {
                    firebase.auth().signOut();
                }
                reject('Unauthorized access');
            }
        });
    });
}

// Function to protect admin routes
async function protectAdminRoute() {
    try {
        if (window.location.pathname.includes('login.html')) {
            return; // Don't redirect if we're already on the login page
        }
        await checkAdminAuth();
    } catch (error) {
        window.location.href = 'login.html';
    }
}

// Function to check if user is already authenticated
function checkAuthState() {
    return new Promise((resolve) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            unsubscribe(); // Unsubscribe once we get the auth state
            resolve(user);
        });
    });
} 