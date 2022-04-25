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
    width: '90%',
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
  const getHandleAuthorPress = authorId => () => onAuthorPress(authorId);
  return authors.map(author => {
    return (
      <TouchableOpacity
        key={author.id}
        onPress={getHandleAuthorPress(author.id)}
        style={authorWrapperStyles}>
        <Image
          source={{uri: author.avatarUrl}}
          style={[commonStyles.roundItem, styles.authorImage]}
        />
        <View style={[commonStyles.shrunkView]}>
          <AuthorTitle title={author.name} />
          <Body content={author.description} numberOfLines={4} />
        </View>
      </TouchableOpacity>
    );
  });
};

export default AuthorsList;
