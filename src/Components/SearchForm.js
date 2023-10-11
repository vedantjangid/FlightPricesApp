import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const SearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const onSearch = () => {
    console.log("Searching Flights from", from, "to", to);
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
});

export default SearchForm;
