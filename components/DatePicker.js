import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { inputContainer } from "../Styles";
export default function DatePicker({ date, onDateChange }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateTxt, setDateTxt] = useState(new Date().toDateString());
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    onDateChange(selectedDate);
    setDateTxt(selectedDate.toDateString());
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <View>
      <TouchableOpacity onPressIn={toggleDatePicker}>
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
