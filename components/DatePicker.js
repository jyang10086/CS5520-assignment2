import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { inputContainer } from "../Styles";
export default function DatePicker({ date, onDateChange }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateTxt, setDateTxt] = useState();
  const handleDateChange = (event, selectedDate) => {
    // If no date is selected, default to the current date
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    onDateChange(currentDate);
    setDateTxt(currentDate.toDateString());
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
    // If no date has been selected yet, set it to today's date
    if (!dateTxt) {
      setDateTxt(new Date().toDateString());
    }
  };

  return (
    <View>
      {/* TouchableOpacity used to detect taps and toggle the DatePicker */}
      <TouchableOpacity onPressIn={toggleDatePicker}>
        {/* TextInput to display the selected date, styled as an input but not editable */}
        <TextInput
          style={styles.inputContainer}
          onPressIn={toggleDatePicker}
          value={dateTxt}
          editable={false}
        />
      </TouchableOpacity>
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
  );
}
const styles = StyleSheet.create({
  inputContainer: inputContainer,
});
