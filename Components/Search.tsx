import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { default as AntIcon } from "react-native-vector-icons/AntDesign";

export default function Search() {
  return (
    <View className="flex-1 bg-slate-100">
      <View className="flex flex-row">
        <TextInput
          className="bg-slate-200 text-base flex-1 py-2 px-4 mt-4 mx-5 focus:border"
          style={{
            borderRadius: 100,
          }}
          returnKeyType="search"
          placeholder="Search"
          selectionColor="black"
          onSubmitEditing={() => {
            console.log("Presses");
          }}
        />
      </View>
      <View className="flex items-center flex-row justify-evenly w-full">
        <TouchableOpacity className="py-3 mt-3 px-3">
          <AntIcon name="qrcode" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity className="py-3 mt-3 px-3">
          <Image
            className="h-7 w-7"
            source={require("../assets/icons/image-search-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity className="py-3 mt-3 px-3">
          <Image
            className="h-6 w-6"
            source={require("../assets/icons/filter.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
