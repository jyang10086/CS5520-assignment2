import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useItemsList } from "../components/context/ItemListContext";
import DatePicker from "../components/DatePicker";
import { addContainer, inputContainer } from "../Styles";
import { useThemeContext } from "../components/context/ThemeContext";
import ActivitySelectList from "../components/ActivitySelectList";

export default function AddActivity({ navigation }) {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());

  const { addActivity } = useItemsList();
  const { theme } = useThemeContext();

  const handleActivityChange = (activity) => {
    setActivity(activity);
  };

  const handleDurationChange = (duration) => {
    setDuration(duration);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleCancel = () => {
    setActivity("");
    setDuration("");
    navigation.goBack();
  };

  const validateDurationInput = (duration) => {
    const isNumber = /^[0-9]+$/.test(duration);
    if (!isNumber || duration.length === 0 || parseInt(duration) < 0) {
      return false;
    }
    return true;
  };

  const handleSave = () => {
    const isDurationValid = validateDurationInput(duration);
    if (!isDurationValid || activity.length === 0 || !date) {
      Alert.alert("Invalid input", "Please check your input values.");
      return;
    }
    const newActivity = {
      id: Math.random().toString(),
      type: "activity",
      activity,
      duration: parseInt(duration),
      date: date.toDateString(),
      isSpecial:
        ["Running", "Weights"].includes(activity) && parseInt(duration) > 60,
    };

    addActivity(newActivity);

    setActivity("");
    setDuration("");
    setDate(null);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, { color: theme.textColor }]}>
          Activity *
        </Text>
        <ActivitySelectList onSelect={handleActivityChange} />
      </View>
      <View>
        <Text style={[styles.text, { color: theme.textColor }]}>
          Duration (min) *
        </Text>
        <TextInput
          style={styles.inputContainer}
          value={duration}
          onChangeText={handleDurationChange}
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
