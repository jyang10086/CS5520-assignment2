import { FlatList, StyleSheet, Text, View } from "react-native";
import { useItemsList } from "../components/context/ItemListContext";
export default function Activities() {
  const { activities } = useItemsList();
  return (
    <View>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.typeText}>{item.type}</Text>
            <Text style={styles.typeText}>{item.date}</Text>
            <Text style={styles.typeText}>{item.duration} min</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "darkslateblue",
    borderRadius: 10,
    marginBottom: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  typeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
