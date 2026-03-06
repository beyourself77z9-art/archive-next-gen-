import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCsFx_VBi6SSUfhXM2ozXefYN_-XLtc-Dw",
authDomain: "archive-next-generation.firebaseapp.com",
projectId: "archive-next-generation",
storageBucket: "archive-next-generation.firebasestorage.app",
messagingSenderId: "866271856728",
appId: "1:866271856728:web:c80ce1e5675bc77104222d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveParticipant(data){
await addDoc(collection(db,"archive_participants"), data);
}
