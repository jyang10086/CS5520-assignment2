import { createContext, useState, useContext } from "react";

const ItemsListContext = createContext();

export const useItemsList = () => {
  return useContext(ItemsListContext);
};

export const ItemsListProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [diets, setDiets] = useState([]);

  const addActivity = (activity) => {
    setActivities((prevActivities) => [activity, ...prevActivities]);
  };

  const addDiet = (diet) => {
    setDiets((prevDiets) => [diet, ...prevDiets]);
  };

  return (
    <ItemsListContext.Provider
      value={{ activities, addActivity, addDiet, diets }}
    >
      {children}
    </ItemsListContext.Provider>
  );
};
