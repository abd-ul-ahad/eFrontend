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
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { default as Ionicons } from "react-native-vector-icons/Ionicons";

export default function Main() {
  const swiperRef = useRef<any>();
  const [index, setIndex] = useState<number>(0);

  return (
    <View className="flex-1 justify-center items-center">
      <SwiperFlatList
        renderAll={true}
        onChangeIndex={(i) => {
          setIndex(i["index"]);
        }}
        ref={swiperRef}
      >
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
          <Ionicons
            name={index == 0 ? "home" : "home-outline"}
            size={25}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 1 });
          }}
          className="w-1/4 py-3 flex justify-center items-center"
        >
          <Ionicons
            name={index == 1 ? "md-search-sharp" : "search-outline"}
            size={25}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 2 });
          }}
          className="w-1/4 relative py-3 flex justify-center items-center"
        >
          <Ionicons
            name={index == 2 ? "md-cart-sharp" : "cart-outline"}
            size={25}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            swiperRef.current.scrollToIndex({ animated: true, index: 3 });
          }}
          className="w-1/4 py-3 flex justify-center items-center"
        >
          <Ionicons
            name={index == 3 ? "md-person-sharp" : "person-outline"}
            size={25}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  child: { width, justifyContent: "center" },
});
