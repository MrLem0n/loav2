import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBosAyHNmWAV6pYlKI9-XmEOZnqZz6YW6Q",
    authDomain: "loashop.firebaseapp.com",
    projectId: "loashop",
    storageBucket: "loashop.appspot.com",
    messagingSenderId: "472319948100",
    appId: "1:472319948100:web:3698219eecf5b96d111311"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default dataBase;