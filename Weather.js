import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Fontisto, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Thunderstorm: {
    icon: "day-lightning",
    gradient: ["#373B44", "#F3F9A7"],
  },
  Drizzle: {
    icon: "rain",
    gradient: ["#0083B0", "#00B4DB"],
  },
  Rain: {
    icon: "rains",
    gradient: ["#000046", "#1CB5E0"],
  },
  Snow: {
    icon: "snow",
    gradient: ["#C9D6FF", "#E2E2E2"],
  },
  Atmosphere: {
    icon: "cloudy-gusts",
    gradient: ["", ""],
  },
  Mist: {
    icon: "cloudy-gusts",
    gradient: ["#8e9eab", "#eef2f3"],
  },
  Smoke: {
    icon: "cloudy-gusts",
    gradient: ["8e9eab", "#eef2f3"],
  },
  Haze: {
    icon: "cloudy-gusts",
    gradient: ["8e9eab", "#eef2f3"],
  },
  Dust: {
    icon: "cloudy-gusts",
    gradient: ["8e9eab", "#eef2f3"],
  },
  Fog: {
    icon: "cloudy-gusts",
    gradient: ["8e9eab", "#eef2f3"],
  },
  Sand: {
    icon: "cloudy-gusts",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Ash: {
    icon: "cloudy-gusts",
    gradient: ["#3E5151", "#DECBA4"],
  },
  Squall: {
    icon: "cloudy-gusts",
    gradient: ["#73C8A9", "#373B44"],
  },
  Tornado: {
    icon: "cloudy-gusts",
    gradient: ["#00467F", "#A5CC82"],
  },
  Clouds: {
    icon: "cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Clear: {
    icon: "horizon-alt",
    gradient: ["#2980B9", "#6DD5FA"],
  },
};

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <Fontisto
          size={100}
          name={weatherOption[condition].icon}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>

      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.city}>City: {name}</Text>
        <Text style={styles.weatherText}>
          The current weather is {condition}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Clear",
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clouds",
    "Smoke",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
    color: "white",
  },
  city: {
    fontSize: 28,
    fontWeight: "300",
    color: "white",
  },
  weatherText: {
    fontWeight: "600",
    color: "white",
    fontSize: 16,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
