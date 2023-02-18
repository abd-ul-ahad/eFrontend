import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Person from "../Components/Person";
import Search from "../Components/Search";

export default function Main() {
  return (
    <View className="flex-1 justify-center items-center">
      <Swiper showsPagination={false} loop={false}>
        <Home />
        <Search />
        <Cart />
        <Person />
      </Swiper>
    </View>
  );
}
