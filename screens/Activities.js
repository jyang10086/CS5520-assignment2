import { FlatList, StyleSheet, Text, View } from "react-native";
import { useItemsList } from "../components/context/ItemListContext";
import Item from "../components/Item";
export default function Activities() {
  const { activities } = useItemsList();
  return (
    <View>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
