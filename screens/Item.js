import { StyleSheet, Text, View } from "react-native";
import { item } from "../Styles";
export default function Item({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.value}</Text>
      <Text>{item.isSpecial ? "⚠️" : null}</Text>
      <Text style={styles.text}>{item.date}</Text>
      <Text style={styles.text}>{item.time} min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: item.itemContainer,
  text: item.typeText,
});
