import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import {Body, LargeText, SmallText, Subtitle} from '../common/Typography';

const styles = StyleSheet.create({
  wrapperStyles: {backgroundColor: 'red'},
  postImg: {
    height: 130,
    width: 120,
    marginRight: 20,
  },
});

const PostTrackItem = ({
  coverImg,
  authorName,
  authorImg,
  title,
  date,
  wrapperStyles,
}) => {
  console.log(title);
  return (
    <View
      style={{
        flexDirection: 'column',
        width: 120,
        marginRight: 20,
      }}>
      <View
        style={[styles.wrapper, wrapperStyles, commonStyles.skewLeftBorder]}>
        <Image
          source={{uri: coverImg}}
          style={[commonStyles.skewLeftBorder, styles.postImg]}
        />
      </View>
      <LargeText content={title} />
    </View>
  );
};

export default PostTrackItem;
