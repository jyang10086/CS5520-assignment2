import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";

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

  return (
    <View style={styles.container}>
      <View>
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
            value={duration}
            onChangeText={handleDurationChange}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.text}>Date *</Text>
          <TextInput
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
          <Button title="Cancel" />
          <Button title="Save" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  text: {
    color: "darkslateblue",
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
