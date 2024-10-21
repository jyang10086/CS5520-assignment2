import { FlatList, StyleSheet, View } from "react-native";
import { useItemsList } from "../components/context/ItemListContext";
import Item from "../components/Item";
import { itemsContainer } from "../Styles";
export default function Items({ route }) {
  // Retrieve both diets and activities from context
  const { diets, activities } = useItemsList();

  // Check the route name to determine which data to display
  const items = route.name === "Activities" ? activities : diets;
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: itemsContainer,
});
