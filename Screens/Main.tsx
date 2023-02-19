import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Person from "../Components/Person";
import Search from "../Components/Search";
import { default as Ionicons } from "react-native-vector-icons/Ionicons";
import { default as FeatherIcon } from "react-native-vector-icons/Feather";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export default function Main() {
  const swiperRef = useRef<any>();

  return (
    <View className="flex-1 justify-center items-center">
      <SwiperFlatList renderAll={true} index={0} ref={swiperRef}>
        <View style={styles.child}>
          <Home />
        </View>
        <View style={styles.child}>
          <Search />
        </View>
        <View style={styles.child}>
          <Cart />
        </View>
        <View style={styles.child}>
          <Person />
        </View>
      </SwiperFlatList>

      <View
        className="flex-1 flex-row justify-center items-center  absolute bottom-1 w-full bg-white"
        style={{ borderRadius: 20 }}
      >
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 0 });
          }}
          className="w-1/4 py-3 flex justify-center items-center"
        >
          <Ionicons name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 1 });
          }}
          className="w-1/4 py-3 flex justify-center items-center"
        >
          <Ionicons name="search-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 2 });
          }}
          className="w-1/4 py-3 flex justify-center items-center"
        >
          <FeatherIcon name="shopping-bag" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 3 });
          }}
          className="w-1/4 py-3 flex justify-center items-center"
        >
          <Ionicons name="person-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  child: { width, justifyContent: "center" },
});
