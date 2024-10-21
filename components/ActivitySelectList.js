import { StyleSheet } from "react-native";
import React from "react";
import { selectListContainer } from "../Styles";
import { SelectList } from "react-native-dropdown-select-list";
export default function ActivitySelectList({ onSelect }) {
  const handleActivityChange = (activity) => {
    onSelect(activity);
  };

  const data = [
    { key: "1", value: "Running" },
    { key: "2", value: "Walking" },
    { key: "3", value: "Swimming" },
    { key: "4", value: "Weights" },
    { key: "5", value: "Yoga" },
    { key: "6", value: "Cycling" },
    { key: "7", value: "Hiking" },
  ];

  return (
    <SelectList
      setSelected={handleActivityChange}
      data={data}
      save="value"
      placeholder="Select An Activity"
      search={false}
      boxStyles={styles.boxStyles}
      inputStyles={styles.inputStyles}
      dropdownStyles={styles.dropdownStyles}
      dropdownTextStyles={styles.dropdownTextStyles}
    />
  );
}

const styles = StyleSheet.create({
  boxStyles: selectListContainer.box,
  inputStyles: selectListContainer.input,
  dropdownStyles: selectListContainer.dropdown,
  dropdownTextStyles: selectListContainer.dropdownText,
});
