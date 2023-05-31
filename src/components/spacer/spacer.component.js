/* eslint-disable prettier/prettier */
import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large:3,
};
const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",


};
const TopSmall = styled.View`
    margin-top: ${(props)=> props.theme.space[1]};
`;
const TopMedium = styled.View`
margin-top: ${(props)=> props.theme.space[2]};
`;
const TopLarge = styled.View`
margin-top: ${(props)=> props.theme.space[3]};
`;
const LeftSmall = styled.View`
margin-top: ${(props)=> props.theme.space[1]};
`;
const LeftMedium = styled.View`
margin-top: ${(props)=> props.theme.space[2]};
`;
const LeftLarge = styled.View`
margin-top: ${(props)=> props.theme.space[3]};
`;

const getVariant = (position, size, theme)=> 
{
  const sizeIndex = sizeVariant[size];
  const property =  positionVariant[position];
  const value = them.space[sizeIndex]

  return `${property}:${value}`;
}

export const Spacer = styled.View`
${({position, size}) => getVariant(position, size)}
`;
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
