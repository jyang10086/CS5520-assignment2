import { createContext, useState, useContext } from "react";

const ItemsListContext = createContext();

export const useItemsList = () => {
  return useContext(ItemsListContext);
};

export const ItemsListProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities((prevActivities) => [activity, ...prevActivities]);
  };

  return (
    <ItemsListContext.Provider value={{ activities, addActivity }}>
      {children}
    </ItemsListContext.Provider>
  );
};
