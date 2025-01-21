import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyCpDDc3CnxaGjI-dvt-oBQOpK1Oyz3R-BA",
    authDomain: "mario-dicis-ej2025.firebaseapp.com",
    projectId: "mario-dicis-ej2025",
    storageBucket: "mario-dicis-ej2025.firebasestorage.app",
    messagingSenderId: "200035393626",
    appId: "1:200035393626:web:c768cc3828cedaf260b863",
    measurementId: "G-38ZSVE2BQR"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)