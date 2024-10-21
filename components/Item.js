import { StyleSheet, Text, View } from "react-native";
import { item } from "../Styles";
import PressableButton from "./PressableButton";
export default function Item({ item, onPress }) {
  const handlePress = () => {
    onPress();
  };
  return (
    <PressableButton customStyle={styles.itemContainer} onPress={handlePress}>
      <Text style={styles.text}>
        {item.type === "activity" ? item.activity : item.description}
      </Text>
      <Text>{item.isSpecial ? "⚠️" : null}</Text>
      <Text style={styles.detailText}>{item.date}</Text>
      <Text style={styles.detailText}>
        {item.type === "activity" ? `${item.duration} min` : item.calories}
      </Text>
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  itemContainer: item.itemContainer,
  text: item.typeText,
  detailText: item.detailText,
});
