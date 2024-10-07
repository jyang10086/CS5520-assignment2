import { StyleSheet, Text, View } from "react-native";
import { item } from "../Styles";
export default function Item({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>
        {item.type === "activity" ? item.activity : item.description}
      </Text>
      <Text>{item.isSpecial ? "⚠️" : null}</Text>
      <Text style={styles.detailText}>{item.date}</Text>
      <Text style={styles.detailText}>
        {item.type === "activity" ? `${item.duration} min` : item.calories}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: item.itemContainer,
  text: item.typeText,
  detailText: item.detailText,
});
