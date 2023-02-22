/* eslint-disable prettier/prettier */
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

//styles
const Title = styled.Text`
padding: 16px;
color: red;
`;
const RestaurantCard = styled(Card)`
background-color: whitesmoke;
`;
const CardCover = styled(Card.Cover)`
padding: 20px;
background-color: whitesmoke
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant!",
    icon,
    photos = ["https://rb.gy/okc0wd"],
    address = "100 some rando street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <CardCover key={name}  source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};

