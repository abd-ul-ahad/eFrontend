import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Search() {
  return (
    <View className="flex-1 bg-slate-100">
      <View className="flex flex-row">
        <TextInput
          className="bg-slate-200 text-base flex-1 py-2 px-4 my-4 ml-5 focus:border"
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
        <TouchableOpacity className="py-3 mt-3 px-3">
          <Image
            className="h-7 w-7"
            source={require("../assets/icons/filter.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
