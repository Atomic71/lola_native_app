import React from 'react';
import {Linking, TouchableOpacity} from 'react-native';

const ExternalLink = ({icon: Icon, linkTo, children}) => {
  const handleOnPress = async () => {
    try {
      const canOpenURL = await Linking.canOpenURL(linkTo);
      if (canOpenURL) {
        Linking.openURL(linkTo);
      } else {
        console.log(canOpenURL);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      {Icon && <Icon />}
      {children}
    </TouchableOpacity>
  );
};

export default ExternalLink;
