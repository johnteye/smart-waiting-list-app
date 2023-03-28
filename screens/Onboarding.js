import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

import Onboarding from "react-native-onboarding-swiper";

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{ marginHorizontal: 20 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoarding({ navigation }) {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onDone={() => navigation.push("GetStarted")}
      onSkip={() => navigation.push("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/people3.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Create a free account",
          subtitle: "New here, start by signing up",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/woman.webp")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Calculate tithe in App",
          subtitle: "Not sure about tithe?",
        },
        // {
        //   backgroundColor: "#fff",
        //   image: (
        //     <Image
        //       source={require("../assets/online-pay.png")}
        //       style={{ width: 305, height: 245 }}
        //     />
        //   ),
        //   title: "Pay tithes & offerings online",
        //   subtitle: "Pay with ease with few clicks",
        // },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
