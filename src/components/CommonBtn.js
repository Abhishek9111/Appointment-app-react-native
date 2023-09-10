import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CommonBtn = ({ w, h, text, onClick, status }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        borderRadius: 10,
        paddingRight: 2,
        paddingLeft: 2,
      }}
    >
      {status ? (
        <LinearGradient
          colors={["#009FFD", "#2A2A72"]}
          style={{
            width: w,
            height: h,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>{text}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#8e8e8e", "#8e8e8e"]}
          style={{
            width: w,
            height: h,
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>{text}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
