import React from 'react';
import {Text} from 'react-native';

export const Body = ({content, styles = []}) => {
  return <Text style={[...styles]}>{content}</Text>;
};
export const SmallText = ({content, styles = []}) => {
  return <Text style={[...styles]}>{content}</Text>;
};
export const Title = ({content, styles = []}) => {
  return <Text style={[...styles]}>{content}</Text>;
};
export const Subtitle = ({content, styles = []}) => {
  return <Text style={[...styles]}>{content}</Text>;
};
export const LargeText = ({content, styles = []}) => {
  return <Text style={[...styles]}>{content}</Text>;
};
