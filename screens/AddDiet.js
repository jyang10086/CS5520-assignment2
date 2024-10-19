import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "../components/DatePicker";
import { addContainer, inputContainer } from "../Styles";
import { useItemsList } from "../components/context/ItemListContext";
import { useThemeContext } from "../components/context/ThemeContext";
import PressableButton from "../components/PressableButton";
import SpecialCheckBox from "../components/SpecialCheckBox";
export default function AddDiet({ navigation, route }) {
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState(new Date());
  const [isSpecial, setIsSpecial] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const { addDiet, deleteDiet, updateDiet } = useItemsList();
  const { theme } = useThemeContext();

  const { mode, item } = route.params;

  useEffect(() => {
    if (mode === "edit") {
      setIsEdit(true);
      const { calories, date, description, isSpecial } = item;
      console.log(item);
      setCalories(calories?.toString() || "");
      setDate(new Date(date));
      setDescription(description);
      setIsSpecial(isSpecial);
    }
  }, [route.params]);

  useEffect(() => {
    if (isEdit) {
      navigation.setOptions({
        title: "Edit",
        headerRight: () => (
          <PressableButton onPress={handleDelete}>
            <Ionicons name="trash-outline" size={24} color="white" />
          </PressableButton>
        ),
      });
    }
  }, [isEdit]);

  const handleDelete = () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            deleteDiet(item.id);
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

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
      id: isEdit ? item.id : "",
      type: "diet",
      description,
      calories: parseInt(calories),
      date: date.toDateString(),
      isSpecial: parseInt(calories) > 800,
    };

    if (!isEdit) {
      addDiet(newDiet);
      setDescription("");
      setCalories("");
      setDate(null);

      navigation.goBack();
    } else {
      Alert.alert(
        "Important",
        "Are you sure you want to save these changes?",
        [
          { text: "No" },
          {
            text: "Yes",
            onPress: () => {
              updateDiet(newDiet);
              navigation.goBack();
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={true}>
      <View style={styles.topContainer}>
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
      </View>
      <View style={styles.bottomContainer}>
        {/* Show SpecialCheckBox only in edit mode for special entries */}
        <SpecialCheckBox
          visible={isEdit && isSpecial}
          isChecked={isChecked}
          setChecked={setChecked}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={handleCancel} />
          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: addContainer.container,
  text: addContainer.text,
  buttonContainer: addContainer.buttons,
  inputContainer: inputContainer,
  topContainer: addContainer.topView,
  bottomContainer: addContainer.bottomView,
});
