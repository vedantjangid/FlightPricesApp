import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SearchForm from "./src/Components/SearchForm";

export default function App() {
  return (
    <View style={{}}>
      <SafeAreaView>
        <SearchForm />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
