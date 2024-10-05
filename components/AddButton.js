import { Button, View } from "react-native";

export default function AddButton({ onAdd }) {
  const addHandler = () => {
    onAdd();
  };
  return (
    <View style={{ marginRight: 10 }}>
      <Button title="Add" onPress={addHandler} />
    </View>
  );
}
