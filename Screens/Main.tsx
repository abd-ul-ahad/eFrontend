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

  const notActive = [
    "home-outline",
    "search-outline",
    "cart-outline",
    "person-outline",
  ];
  const activeIcon = [
    "home",
    "md-search-sharp",
    "md-cart-sharp",
    "md-person-sharp",
  ];

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
        {notActive.map((e, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                swiperRef.current.scrollToIndex({ animated: true, index: i });
              }}
              className="w-1/4 py-3 flex justify-center items-center"
            >
              <Ionicons
                name={index == i ? activeIcon[i] : e}
                size={25}
                color="#000"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  child: { width, justifyContent: "center" },
});
