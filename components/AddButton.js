import { Button, View } from "react-native";

export default function AddButton({ onAdd }) {
  const addHandler = () => {
    onAdd();
  };
  return (
    <View>
      <Button title="Add" onPress={addHandler} />
    </View>
  );
}
