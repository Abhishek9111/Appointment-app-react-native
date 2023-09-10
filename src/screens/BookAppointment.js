import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import CommonBtn from "../components/CommonBtn";

import Header from "../components/Header";
let daysList = [];
const BookAppointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [selectedGender, setSelectedGender] = useState(0); //male as default
  useEffect(() => {
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      daysList.push(i);
    }
  }, []);
  const getDays = (month) => {
    let days = 0;
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10 ||
      month == 11
    ) {
      days == 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      days = 30;
    }
    return days;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          isIcon={true}
          icon={require("../images/back.png")}
          title={"Book Appointment"}
        />
        <Image source={require("../images/doctor.png")} style={styles.docImg} />
        <Text style={styles.name}>Doctor Temp2</Text>
        <Text style={styles.spcl}>Skin Specialist </Text>
        <Text style={styles.heading}>Select Date</Text>
        <View>
          <FlatList
            horizontal
            data={daysList}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue",
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            scrollEnabled={false}
            data={[
              "10:00-12:00PM",
              "12:00-02:00PM",
              "02:00-04:00PM",
              "04:00-06:00PM",
              "06:00-08:00PM",
              "08:00-11:00PM",
            ]}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    { borderColor: selectedSlot == index ? "blue" : "black" },
                  ]}
                >
                  <Text
                    style={{ color: selectedSlot == index ? "blue" : "black" }}
                    onPress={() => {
                      setSelectedSlot(index);
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput style={styles.nameInput} placeholder={"Enter name"} />
        <Text style={styles.heading}>Patient Gender</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 0 ? "blue" : "black",
              },
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}
          >
            <Image
              source={require("../images/male.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.gender,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 1 ? "blue" : "black",
              },
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}
          >
            <Image
              source={require("../images/female.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <CommonBtn w={190} h={45} text={"Book Now"} status={true} />
      </View>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  docImg: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },
  spcl: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#f2f2f2",
    color: "green",
    padding: 5,
    borderRadius: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: 700,
    marginTop: 15,
    // alignSelf: "center",
    marginLeft: 15,
  },
  timeSlot: {
    width: "45%",
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: "90%",
    height: 45,
    borderWidth: 0.5,
    alignSelf: "center",
    paddingLeft: 20,
  },
  genderView: {
    marginTop: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  gender: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
