/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
export const RestaurantInfo = ({ restaurant= {} }) => {
  const {
    name = "some restaurant",
    icon ,
    photos = ["https://rb.gy/okc0wd"],
    address = "100 some rando street",
    isOpenNow = true ,
    rating=4 ,
    isClosedTemporarily=false,
  } = restaurant;
  return <Text>{name}</Text>;
};
