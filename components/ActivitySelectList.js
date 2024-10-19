import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { selectListContainer } from "../Styles";
import { SelectList } from "react-native-dropdown-select-list";
export default function ActivitySelectList({ editMode, activity, onSelect }) {
  // To fix the issue with dropdown picker scroll bugs on Android,
  // I have to use react-native-dropdown-select-list instead.
  const [selected, setSelected] = useState("");

  // The useEffect hook is called when the activity prop changes.
  // It sets the selected state to the new activity.
  useEffect(() => {
    setSelected(activity);
  }, [activity]);

  // The handleActivityChange function is called when the user selects
  // an activity from the dropdown picker. It calls the onActivityChange
  // function with the new activity.
  function handleActivityChange(activity) {
    onSelect(activity);
    setSelected(activity);
  }

  const data = [
    { key: "1", value: "Running" },
    { key: "2", value: "Walking" },
    { key: "3", value: "Swimming" },
    { key: "4", value: "Weights" },
    { key: "5", value: "Yoga" },
    { key: "6", value: "Cycling" },
    { key: "7", value: "Hiking" },
  ];

  // The defaultOption is an object that represents the selected
  // activity. If the selected activity is null, the defaultOption
  // is null.
  const defaultOption = selected ? { key: selected, value: selected } : null;

  return (
    <SelectList
      setSelected={handleActivityChange}
      data={data}
      save="value"
      placeholder="Select An Activity"
      search={false}
      defaultOption={editMode ? defaultOption : ""}
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
