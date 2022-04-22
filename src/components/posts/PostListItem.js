import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import {Subtitle} from '../common/Typography';

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
  },
  wrapper: {
    borderColor: '#252932',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
});

const PostListItemAuthor = ({author}) => {
  return <View></View>;
};

const PostListItem = ({coverImg, author, title}) => {
  return (
    <View style={[commonStyles.skewLeftBorder, styles.wrapper]}>
      <Image
        source={{uri: coverImg}}
        style={[commonStyles.skewLeftBorder, styles.img]}
      />
      <View style={[commonStyles.horizontalPaddingSmall]}>
        <Subtitle content={title} styles={[commonStyles.wrap]} />
      </View>
    </View>
  );
};

export default PostListItem;
