import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_aRdAPiyI607G5WAVqzSGeWKRzxtMsG4",
  authDomain: "uolkut-cf459.firebaseapp.com",
  projectId: "uolkut-cf459",
  storageBucket: "uolkut-cf459.appspot.com",
  messagingSenderId: "146463407120",
  appId: "1:146463407120:web:f31e2975d301dbbb5a1e95",
  measurementId: "G-011SPJP8J0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);