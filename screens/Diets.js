import { FlatList, StyleSheet, View } from "react-native";
import { useItemsList } from "../components/context/ItemListContext";
import Item from "../components/Item";
import { itemsContainer } from "../Styles";
export default function Diets() {
  const { diets } = useItemsList();
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={diets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: itemsContainer,
});
