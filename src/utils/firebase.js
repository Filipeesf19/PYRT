import firebase from "firebase/compat/app";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, deleteDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQTjRSxuEdkGqHr-Ws9nF1h1suLqMjiEA",
  authDomain: "put-your-recipes-togethe-a5fcd.firebaseapp.com",
  projectId: "put-your-recipes-togethe-a5fcd",
  storageBucket: "put-your-recipes-togethe-a5fcd.appspot.com",
  messagingSenderId: "1045523885424",
  appId: "1:1045523885424:web:9d7dc091eea8288b6ef3b5",
};

export default firebase;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = getFirestore();

//CRUD FUNCTIONS

//GET COLLECTION
export const getCollection = async (path, setState) => {
  const col = collection(db, path);
  try {
    onSnapshot(col, (snapshot) => {
      let data = [];
      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setState(data);
      console.log(data);
    });
    getCollection;
  } catch (error) {
    console.log(error);
  }
};

// GET DOCUMENT
export const getDocument = async (path, id, setState) => {
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

//ADD DOCUMENT WITHOUT AUTO ID TO THE SERVER
export const addDocumentAutoIdNoAutoId = async (path, newDocName, fields) => {
  const col = collection(db, path);
  await setDoc(doc(db, col, `${newDocName}`), fields);
};

//DELETE DOCUMENT IN THE SERVER
export const deleteData = async (path, id) => {
  await deleteDoc(doc(db, path, id));
};

//UPDATE A DOCUMENT IN THE SERVER
export const updateData = async (path, id, newData) => {
  const docRef = doc(db, path, `${id}`);
  await updateDoc(docRef, newData);
};
