import React, { useState } from "react";
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
  const [tabInd, setTabInd] = useState(0);
  return (
    <View className="flex-1 justify-center items-center">
      <SwiperFlatList index={tabInd}>
        <View style={[styles.child, { backgroundColor: "tomato" }]}>
          <Home />
        </View>
        <View style={[styles.child, { backgroundColor: "thistle" }]}>
          <Search />
        </View>
        <View style={[styles.child, { backgroundColor: "skyblue" }]}>
          <Cart />
        </View>
        <View style={[styles.child, { backgroundColor: "teal" }]}>
          <Person />
        </View>
      </SwiperFlatList>

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

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },
});
