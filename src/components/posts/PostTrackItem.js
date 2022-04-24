import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import Avatar from '../common/Avatar';
import {Body, LargeText, SmallText, Subtitle} from '../common/Typography';

const styles = StyleSheet.create({
  postImg: {
    height: 130,
    width: 130,
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
        width: 130,
        marginRight: 30,
      }}>
      <View
        style={[
          commonStyles.skewLeftBorder,
          commonStyles.gutterSmall,
          {backgroundColor: 'red', flexGrow: 0, height: 130},
          {position: 'relative'},
        ]}>
        <Image
          source={{uri: coverImg}}
          style={[commonStyles.skewLeftBorder, styles.postImg]}
        />
        <Avatar
          resourceUrl={authorImg}
          wrapperStyles={[
            {positon: 'absolute', bottom: 40, left: 8, zIndex: 3},
            commonStyles.standardBorder,
          ]}
        />
      </View>

      <LargeText content={title + title + title} numberOfLines={3} />
    </View>
  );
};

export default PostTrackItem;
