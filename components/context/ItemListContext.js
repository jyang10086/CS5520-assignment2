import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useState, useContext } from "react";
import { database } from "../../firebase/firebaseSetup";
import { writeToDB } from "../../firebase/firestoreHelper";

// Creating a context to hold items (activities and diets)
const ItemsListContext = createContext();

// Custom hook for easier access to the ItemsListContext
export const useItemsList = () => {
  return useContext(ItemsListContext); // Returns the context value (activities, diets, and functions to add them)
};

// Provider component that will wrap the app, giving access to activities and diets to all children
export const ItemsListProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [diets, setDiets] = useState([]);

  const addActivity = (activity) => {
    writeToDB("activities", activity);
  };

  const addDiet = (diet) => {
    writeToDB("diets", diet);
  };

  useEffect(() => {
    // Subscribe to activities collection
    const unsubscribeActivities = onSnapshot(
      collection(database, "activities"),
      (querySnapshot) => {
        const updatedItems = querySnapshot.docs.map((snapDoc) => ({
          ...snapDoc.data(),
          id: snapDoc.id, // Adding document ID
        }));
        setActivities(updatedItems);
      }
    );
    return () => unsubscribeActivities();
  }, []);

  useEffect(() => {
    // Subscribe to diets collection
    const unsubscribeDiets = onSnapshot(
      collection(database, "diets"),
      (querySnapshot) => {
        const updatedItems = querySnapshot.docs.map((snapDoc) => ({
          ...snapDoc.data(),
          id: snapDoc.id, // Adding document ID
        }));
        setDiets(updatedItems);
      }
    );
    return () => unsubscribeDiets();
  }, []);

  // Returning the provider with the values for activities, addActivity, diets, and addDiet.
  // These will be accessible to any components wrapped inside ItemsListProvider
  return (
    <ItemsListContext.Provider
      value={{ activities, addActivity, addDiet, diets }}
    >
      {children}
      {/* Rendering the children components wrapped by this provider */}
    </ItemsListContext.Provider>
  );
};
