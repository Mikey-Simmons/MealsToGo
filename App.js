import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from "react-native";
import React from "react";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.myText}>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.myText}>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,

    flex: 1,

    flexGrow: 1,
  },
  search: {
    backgroundColor: "green",
    flex: 0.05,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
  },
  myText: {
    padding: 10,
    color: "white",
  },
});
