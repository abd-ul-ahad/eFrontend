import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Person from "../Components/Person";
import Search from "../Components/Search";
import { default as Ionicons } from "react-native-vector-icons/Ionicons";
import { default as FeatherIcon } from "react-native-vector-icons/Feather";

export default function Main() {
  const [tabInd, setTabInd] = useState(0);
  return (
    <View className="flex-1 justify-center items-center">
      <Swiper
        showsPagination={false}
        onIndexChanged={(index) => {
          setTabInd(index);
        }}
        loop={false}
        // index={0}s
      >
        <Home />
        <Search />
        <Cart />
        <Person />
      </Swiper>
      <View
        className="flex-1 flex-row justify-center items-center  absolute bottom-1 w-full bg-white"
        style={{ borderRadius: 20 }}
      >
        <TouchableOpacity className="w-1/4 py-3 flex justify-center items-center">
          <Ionicons name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="w-1/4 py-3 flex justify-center items-center">
          <Ionicons name="search-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="w-1/4 py-3 flex justify-center items-center">
          <FeatherIcon name="shopping-bag" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="w-1/4 py-3 flex justify-center items-center">
          <Ionicons name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
