import firebaseConfig from "./FireBase.config";
import { initializeApp } from "firebase/app";

const initializeAutthentication =() => initializeApp(firebaseConfig );
export default initializeAutthentication;