import { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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
      // id: Math.random().toString(),
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
    <View>
      {/* ScrollView allows the content to be scrollable. */}
      <ScrollView contentContainerStyle={styles.container} bounces={true}>
        {/* View for the Description input field */}
        <View>
          {/* Label for the description, styled with dynamic text color based on the current theme */}
          <Text style={[styles.text, { color: theme.textColor }]}>
            Description *
          </Text>

          {/* TextInput for entering a multi-line description. */}
          <TextInput
            style={{ ...styles.inputContainer, height: 120 }}
            value={description}
            onChangeText={handleDescriptionChange}
            multiline={true}
            numberOfLines={4}
          />
        </View>

        {/* View for the Calories input field */}
        <View>
          {/* Label for the calories input, with dynamic styling based on theme */}
          <Text style={[styles.text, { color: theme.textColor }]}>
            Calories *
          </Text>

          {/* TextInput for entering calorie value. 
              'keyboardType' is set to numeric to allow only number inputs. */}
          <TextInput
            style={styles.inputContainer}
            value={calories}
            onChangeText={handleCaloriesChange}
            keyboardType="numeric"
          />
        </View>

        {/* View for the Date input field */}
        <View>
          {/* Label for the date, also styled dynamically based on the theme */}
          <Text style={[styles.text, { color: theme.textColor }]}>Date *</Text>

          {/* Custom DatePicker component to select the date. */}
          <DatePicker date={date} onDateChange={handleDateChange} />
        </View>

        {/* View for the buttons (Cancel and Save) */}
        <View style={styles.buttonContainer}>
          {/* Cancel button */}
          <Button title="Cancel" onPress={handleCancel} />
          {/* Save button */}
          <Button title="Save" onPress={handleSave} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: addContainer.container,
  text: addContainer.text,
  buttonContainer: addContainer.buttons,
  inputContainer: inputContainer,
});
