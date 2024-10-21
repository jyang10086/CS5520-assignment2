import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useItemsList } from "../components/context/ItemListContext";
import Item from "../components/Item";
import { addContainer, itemsContainer } from "../Styles";
export default function Items({ navigation, route }) {
  // Retrieve both diets and activities from context
  const { diets, activities } = useItemsList();

  // Check the route name to determine which data to display
  const items = route.name === "Activities" ? activities : diets;
  const handlePress = (item) => {
    if (route.name === "Activities") {
      navigation.navigate("Add An Activity", { mode: "edit", item });
    } else {
      navigation.navigate("Add A Diet", { mode: "edit", item });
    }
  };

  const renderItem = ({ item }) => (
    <Item item={item} onPress={() => handlePress(item)} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.content}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: addContainer.container,
  content: itemsContainer,
});
