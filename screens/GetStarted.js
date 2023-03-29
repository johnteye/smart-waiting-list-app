import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/wait.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.benefits}>
        <Text style={{ color: Colors.white, fontSize: 20, fontWeight: "bold" }}>
          Benefits
        </Text>
        <View style={{ padding: 20 }}>
           <FlatList
          data={[
            { key: 'Save time by avoiding long lines and wait times' },
            { key: 'Manage your waitlist experience from your phones' },
            { key: 'Enjoy your free time by doing other things while waiting' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20 }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={{ color: Colors.dark, fontSize: 16 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    marginHorizontal: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 55,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  benefits: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  items: {
    marginTop: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.white,
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
