import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AddButtonStyle } from "../Styles";
import PressableButton from "./PressableButton";
export default function AddButton({ icon, onAdd }) {
  const addHandler = () => {
    onAdd();
  };
  return (
    <PressableButton onPress={addHandler} customStyle={styles.defaultStyle}>
      <Ionicons name="add" size={24} color="white" />
      <Ionicons name={icon} size={24} color="white" />
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  defaultStyle: AddButtonStyle.defaultStyle,
});
