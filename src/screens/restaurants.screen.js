/* eslint-disable prettier/prettier */
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

//styles
const SafeArea = styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
padding: 16px;
`;
const RestaurantListContainer = styled.View`
  flex:1;
  padding: 16px;
  background-color: green
`;
//end of styles
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);

