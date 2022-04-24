import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import {ArrowRightButton} from '../common/Buttons';
import {Body, Subtitle} from '../common/Typography';

const styles = StyleSheet.create({
  authorWrapper: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  authorImage: {
    height: 80,
    width: 80,
    marginRight: 10,
    alignSelf: 'center',
  },
  authorTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorTitle: {
    maxWidth: '90%',
  },
});

const authorWrapperStyles = [
  commonStyles.skewRightBorder,
  commonStyles.standardBorder,
  commonStyles.horizontalPaddingSmall,
  commonStyles.gutterSmall,
  styles.authorWrapper,
];

const AuthorTitle = ({title}) => (
  <View style={[styles.authorTitleWrapper, commonStyles.gutterSmall]}>
    <Subtitle content={title} textStyles={[styles.authorTitle]} />
    <ArrowRightButton />
  </View>
);

const AuthorsList = ({authors, onAuthorPress}) => {
  return authors.map(author => {
    const handleAuthorPress = () => onAuthorPress({authorId: author.id});
    return (
      <TouchableOpacity
        key={author.id}
        onPress={handleAuthorPress}
        style={authorWrapperStyles}>
        <Image
          source={{uri: author.authorImg}}
          style={[commonStyles.roundItem, styles.authorImage]}
        />
        <View style={[commonStyles.shrunkView]}>
          <AuthorTitle title={author.title} />
          <Body content={author.shortBio} numberOfLines={4} />
        </View>
      </TouchableOpacity>
    );
  });
};

export default AuthorsList;
