import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { inputContainer } from "../Styles";
export default function DatePicker({ date, onDateChange }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateTxt, setDateTxt] = useState(new Date().toDateString());
  const handleDateChange = (event, selectedDate) => {
    onDateChange(selectedDate);
    setDateTxt(selectedDate.toDateString());
    setShowDatePicker(!showDatePicker);
  };

  return (
    <View>
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
  );
}
const styles = StyleSheet.create({
  inputContainer: inputContainer,
});
