import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import SearchForm from "./src/Components/SearchForm";
import FlightOptionItem from "./src/Components/FlightOptionItem";
import data from "./data.json";

export default function App() {
  return (
    <View style={{ flex: "1" }}>
      <SafeAreaView>
        <SearchForm />

        <FlatList
          data={data}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
