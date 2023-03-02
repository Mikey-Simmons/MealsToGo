/* eslint-disable prettier/prettier */
import React from "react";
//import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

//styles
const Title = styled.Text`
  
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body}
`;
const Address = styled.Text`
  
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption}
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props)=> props.theme.colors.bg.primary};
`;
const CardCover = styled(Card.Cover)`
  padding: ${(props)=> props.theme.space[3]};
  background-color: ${(props)=> props.theme.colors.bg.primary};
`;
const Info = styled.View`
  padding: ${(props)=> props.theme.space[3]};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant!",
    icon,
    photos = ["https://tb-static.uber.com/prod/image-proc/processed_images/3e2e785f12c20cc3fc37435b2999e8d7/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg" ],
    address = "100 some rando street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
