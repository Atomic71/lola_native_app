import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import {Body, SmallText, Subtitle} from '../common/Typography';

const styles = StyleSheet.create({
  postImg: {
    height: 150,
    width: 150,
    marginRight: 10,
  },
  postImgSmall: {
    height: 120,
    width: 150,
    marginRight: 10,
  },
  authorImg: {
    height: 38,
    width: 38,
    borderRadius: 100,
    marginRight: 10,
  },
  wrapper: {
    borderColor: '#252932',
    borderWidth: 1,
    flexDirection: 'row',
  },
  detailWrapper: {
    marginBottom: 10,
    flexShrink: 1,
  },
  title: {
    marginBottom: 3,
  },
  postInfoWrapper: {
    paddingVertical: 10,
    flexShrink: 1,
  },
});

const PostListItem = ({
  coverImg,
  authorName,
  authorImg,
  title,
  date,
  wrapperStyles,
  hideAuthorInfo,
}) => {
  return (
    <View style={[commonStyles.skewLeftBorder, styles.wrapper, wrapperStyles]}>
      <Image
        source={{uri: coverImg}}
        style={[
          commonStyles.skewLeftBorder,
          hideAuthorInfo ? styles.postImgSmall : styles.postImg,
        ]}
      />
      <View style={[styles.postInfoWrapper]}>
        {!hideAuthorInfo && (
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: authorImg}} style={[styles.authorImg]} />
            <View style={styles.detailWrapper}>
              <Body
                content={authorName + ' ' + authorName + ' ' + authorName}
                styles={[styles.title, {flex: 'row', flexWrap: 'wrap'}]}
              />
              <SmallText content={date} />
            </View>
          </View>
        )}
        <Subtitle
          content={title + title + title}
          numberOfLines={hideAuthorInfo ? 4 : 3}
        />
      </View>
    </View>
  );
};

export default PostListItem;
