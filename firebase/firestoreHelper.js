import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(collectionNme, data) {
  try {
    await addDoc(collection(database, collectionNme), data);
  } catch (err) {
    console.log("Error adding document: ", err);
  }
}

export async function updateFromDB(collectionNme, activityData) {
  try {
    await updateDoc(
      doc(database, collectionNme, activityData.id),
      activityData
    );
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(collectionNme, id) {
  try {
    await deleteDoc(doc(database, collectionNme, id));
  } catch (err) {
    console.error("Error deleting document: ", err);
  }
}
