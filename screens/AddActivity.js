import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";
import { useItemsList } from "../components/context/ItemListContext";

const activityData = [
  { key: "1", value: "Running" },
  { key: "2", value: "Walking" },
  { key: "3", value: "Swimming" },
  { key: "4", value: "Weights" },
  { key: "5", value: "Yoga" },
  { key: "6", value: "Cycling" },
  { key: "7", value: "Hiking" },
];

export default function AddActivity({ navigation }) {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateTxt, setDateTxt] = useState(new Date().toDateString());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { addActivity } = useItemsList();

  const handleActivityChange = (activity) => {
    setActivity(activity);
  };

  const handleDurationChange = (duration) => {
    setDuration(duration);
  };

  const handleDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setDateTxt(selectedDate.toDateString());
    setShowDatePicker(!showDatePicker);
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
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }
    const newActivity = {
      id: Math.random().toString(),
      type: activity,
      duration: parseInt(duration),
      date: date.toDateString(),
    };

    addActivity(newActivity);

    setActivity("");
    setDuration("");
    setDateTxt("");
    setDate(null);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Activity *</Text>
        <SelectList
          setSelected={handleActivityChange}
          data={activityData}
          save="value"
          placeholder="Select An Activity"
          search={false}
        />
      </View>
      <View>
        <Text style={styles.text}>Duration (min) *</Text>
        <TextInput
          style={styles.inputContainer}
          value={duration}
          onChangeText={handleDurationChange}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.text}>Date *</Text>
        <TextInput
          style={styles.inputContainer}
          onPressIn={() => setShowDatePicker(!showDatePicker)}
          value={dateTxt}
          editable={false}
        />
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="inline"
            onChange={handleDateChange}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={handleCancel} />
        <Button title="Save" onPress={handleSave} />
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
  inputContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: "darkslateblue",
    borderRadius: 5,
    height: 40,
    backgroundColor: "white",
    color: "darkslateblue",
    fontSize: 18,
  },
});
