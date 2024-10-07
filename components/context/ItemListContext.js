import { createContext, useState, useContext } from "react";

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
    setActivities((prevActivities) => [activity, ...prevActivities]);
  };

  const addDiet = (diet) => {
    setDiets((prevDiets) => [diet, ...prevDiets]);
  };

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
