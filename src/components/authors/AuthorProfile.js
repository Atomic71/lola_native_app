import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AUTHOR} from '../../constants/text';
import commonStyles from '../../styles/commonStyles';
import {Body, Subtitle} from '../common/Typography';

const styles = StyleSheet.create({
  authorImg: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
  },
  authorImgContainer: {
    justifyContent: 'center',
  },
});

const AuthorProfile = ({author, wrapperStyles = []}) => {
  console.log(author);

  return (
    <View style={[styles.authorContainer, ...wrapperStyles]}>
      <View style={[styles.authorImgContainer, commonStyles.gutter]}>
        <Image
          source={{uri: author.authorImg}}
          style={[styles.authorImg, commonStyles.gutterSmall]}
        />

        <Subtitle
          content={author.title}
          textStyles={[commonStyles.centeredText]}
        />
      </View>
      <Body content={AUTHOR.about} textStyles={[commonStyles.gutterSmall]} />
      <Body content={author.shortBio} />
    </View>
  );
};

export default AuthorProfile;
