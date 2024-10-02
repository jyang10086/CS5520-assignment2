import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DatePicker from "../components/DatePicker";
import { inputContainer } from "../Styles";
export default function AddDiet() {
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(new Date());

  const handleDescriptionChange = (activity) => {
    setDescription(activity);
  };

  const handleCaloriesChange = (duration) => {
    setCalories(duration);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Description *</Text>
        <TextInput
          style={styles.inputContainer}
          value={description}
          onChangeText={handleDescriptionChange}
        />
      </View>
      <View>
        <Text style={styles.text}>Calories *</Text>
        <TextInput
          style={styles.inputContainer}
          value={calories}
          onChangeText={handleCaloriesChange}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.text}>Date *</Text>
        <DatePicker date={date} onDateChange={handleDateChange} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" />
        <Button title="Save" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    rowGap: 40,
  },
  text: {
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputContainer: inputContainer,
});
