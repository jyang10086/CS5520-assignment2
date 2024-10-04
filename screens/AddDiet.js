import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "../components/DatePicker";
import { addContainer, inputContainer } from "../Styles";
import { useItemsList } from "../components/context/ItemListContext";
import { useThemeContext } from "../components/context/ThemeContext";
export default function AddDiet({ navigation }) {
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(new Date());

  const { addDiet } = useItemsList();
  const { theme } = useThemeContext();

  const handleDescriptionChange = (activity) => {
    setDescription(activity);
  };

  const handleCaloriesChange = (duration) => {
    setCalories(duration);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleCancel = () => {
    setDescription("");
    setCalories("");
    navigation.goBack();
  };

  const handleSave = () => {
    if (!description || calories === "" || isNaN(calories) || calories < 0) {
      Alert.alert("Invalid input", "Please check your input values.");
      return;
    }
    const newDiet = {
      id: Math.random().toString(),
      type: "diet",
      description,
      calories: parseInt(calories),
      date: date.toDateString(),
      isSpecial: parseInt(calories) > 800,
    };

    addDiet(newDiet);

    setDescription("");
    setCalories("");
    setDate(null);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, { color: theme.textColor }]}>
          Description *
        </Text>
        <TextInput
          style={{ ...styles.inputContainer, height: 120 }}
          value={description}
          onChangeText={handleDescriptionChange}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View>
        <Text style={[styles.text, { color: theme.textColor }]}>
          Calories *
        </Text>
        <TextInput
          style={styles.inputContainer}
          value={calories}
          onChangeText={handleCaloriesChange}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={[styles.text, { color: theme.textColor }]}>Date *</Text>
        <DatePicker date={date} onDateChange={handleDateChange} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={handleCancel} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: addContainer.container,
  text: addContainer.text,
  buttonContainer: addContainer.buttons,
  inputContainer: inputContainer,
});
