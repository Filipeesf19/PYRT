import "firebase/firestore";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  getDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import { CollectionReference, DocumentData } from "firebase/firestore";
import { useDispatch } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyAYZTJvumVvGNOykQCcqN9xP-7MhpI1bFg",
  authDomain: "put-your-recipes.firebaseapp.com",
  projectId: "put-your-recipes",
  storageBucket: "put-your-recipes.appspot.com",
  messagingSenderId: "702256801812",
  appId: "1:702256801812:web:e2cb81b68a9adb98ef5f01",
};

export default firebase;

firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
// CRUD FUNCTIONS

// GET COLLECTION

// GET DOCUMENT
export const getDocument = async (
  path: string,
  id: string,
  setState: Function
) => {
  const docRef = doc(db, path, `${id}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    let data = docSnap.data();
    data.id = `${id}`;
    setState(data);
  } else {
    console.log("no data");
  }
};

// ADD DOCUMENT WITHOUT AUTO ID TO THE SERVER
export const addDocument = async (
  path: string,
  newDocName: string,
  fields: object
) => {
  const col = collection(db, path);

  try {
    if (col instanceof CollectionReference) {
      // Check if col is a valid CollectionReference
      await setDoc(doc(col, newDocName), fields);
      console.log("Document added successfully!");
    } else {
      console.error("Invalid collection reference.");
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// DELETE DOCUMENT IN THE SERVER
export const deleteData = async (path: string, id: string) => {
  await deleteDoc(doc(db, path, id));
};

// UPDATE A DOCUMENT IN THE SERVER
export const updateData = async (path: string, id: string, newData: object) => {
  const docRef = doc(db, path, `${id}`);
  await updateDoc(docRef, newData);
};
