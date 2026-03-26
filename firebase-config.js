import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// BƯỚC 1: Lấy thông tin này trong Firebase Console -> Project Settings -> General -> Your apps (Web)
// Thay thế đoạn config ảo này bằng cấu hình thật của bạn
const firebaseConfig = {
  apiKey: "AIzaSyB66R_2U0jm233vLoAEy0KyTFESP7TbSW0",
  authDomain: "chtt-90352.firebaseapp.com",
  projectId: "chtt-90352",
  storageBucket: "chtt-90352.firebasestorage.app",
  messagingSenderId: "21734090877",
  appId: "1:21734090877:web:4c89f495bc3e0d7f726914",
  measurementId: "G-RF19TZFGBL"
};

// Khởi tạo Firebase App và Firestore Database
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export ra để các file HTML khác import vào dùng
export { db, collection, addDoc, getDocs };
