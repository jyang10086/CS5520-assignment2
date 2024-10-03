import { FlatList, View } from "react-native";
import { useItemsList } from "../components/context/ItemListContext";
import Item from "../components/Item";
export default function Diets() {
  const { diets } = useItemsList();
  return (
    <View>
      <FlatList
        data={diets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
