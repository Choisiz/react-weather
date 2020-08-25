import React from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "5f1bc3d139c37b3d03611c086b3a19ed";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    console.log("ss");
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("에러 입니다.", "sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
