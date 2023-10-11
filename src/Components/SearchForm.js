import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather } from "@expo/vector-icons";

const SearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  const onSearch = () => {
    console.log(from, to, departDate, returnDate);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip.
      </Text>
      <TextInput
        value={from}
        style={styles.input}
        placeholder="From"
        onChangeText={(newVal) => setFrom(newVal)}
      />
      <TextInput
        value={to}
        placeholder="To"
        style={styles.input}
        onChangeText={(newVal) => setTo(newVal)}
      />
      <View style={styles.datePicker}>
        <Feather name="calendar" size={24} color="gray" />
        <DateTimePicker
          value={departDate}
          onChange={(e, newDate) => setDepartDate(newDate || new Date())}
          minimumDate={new Date()}
          style={styles.calendar}
        />
        <Text
          style={{
            color: "gainsboro",
            fontSize: 25,
            alignSelf: "center",
            display: "flex",
          }}
        >
          |
        </Text>
        <DateTimePicker
          value={returnDate}
          onChange={(e, newDate) => setReturnDate(newDate || new Date())}
          minimumDate={departDate}
          style={styles.calendar}
        />
      </View>
      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,

    //shadow styles
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    marginVertical: 15,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  calendar: {
    // alignSelf: "center",
    margin: 10,
  },
  datePicker: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    width: "100%",
    alignContent: "center",
  },
});

export default SearchForm;
