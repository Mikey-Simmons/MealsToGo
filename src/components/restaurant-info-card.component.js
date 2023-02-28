/* eslint-disable prettier/prettier */
import React from "react";
//import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

//styles
const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props)=> props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${(props)=> props.theme.space[3]};
  background-color: ${(props)=> props.theme.colors.bg.primary};
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
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};
