import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useItemsList } from "../components/context/ItemListContext";
import DatePicker from "../components/DatePicker";
import { addContainer, inputContainer } from "../Styles";
import { useThemeContext } from "../components/context/ThemeContext";
import ActivitySelectList from "../components/ActivitySelectList";
import PressableButton from "../components/PressableButton";
import SpecialCheckBox from "../components/SpecialCheckBox";

export default function AddActivity({ navigation, route = {} }) {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [isSpecial, setIsSpecial] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const { addActivity, deleteActivity, updateActivity } = useItemsList();
  const { theme } = useThemeContext();

  const { mode, item } = route.params;
  useEffect(() => {
    if (mode === "edit") {
      setIsEdit(true);
      const { activity, duration, date, isSpecial } = item;
      setActivity(activity || "");
      setDuration(duration?.toString() || "");
      setDate(new Date(date));
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
            deleteActivity(item.id);
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  };

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
      id: isEdit ? item.id : "",
      type: "activity",
      activity,
      duration: parseInt(duration),
      date: date.toDateString(),
      isSpecial:
        ["Running", "Weights"].includes(activity) &&
        parseInt(duration) > 60 &&
        !isChecked,
    };

    if (!isEdit) {
      addActivity(newActivity);
      setActivity("");
      setDuration("");
      setDate(null);
      setIsSpecial(false);

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
              updateActivity(newActivity);
              navigation.goBack();
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}bounces={true}>
        <View style={styles.topContainer}>
          {/* Input for selecting an activity */}
          <View>
            <Text style={[styles.text, { color: theme.textColor }]}>
              Activity *
            </Text>
            <ActivitySelectList
              editMode={isEdit}
              activity={activity}
              onSelect={handleActivityChange}
            />
          </View>
          {/* Input for entering the duration */}
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
          {/* Date picker for selecting the activity date */}
          <View>
            <Text style={[styles.text, { color: theme.textColor }]}>
              Date *
            </Text>
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: addContainer.container,
  content: addContainer.contentContainer,
  text: addContainer.text,
  buttonContainer: addContainer.buttons,
  inputContainer: inputContainer,
  topContainer: addContainer.topView,
  bottomContainer: addContainer.bottomView,
});
