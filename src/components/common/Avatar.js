import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Avatar = ({wrapperStyles = [], resourceUrl}) => {
  return (
    <View style={[styles.avatarContainer, ...wrapperStyles]}>
      <Image source={{uri: resourceUrl}} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    height: 33,
    width: 33,
  },
});
