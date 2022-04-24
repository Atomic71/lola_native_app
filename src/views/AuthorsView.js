import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import AuthorsList from '../components/authors/AuthorsList';
import {Body, Subtitle} from '../components/common/Typography';
import {APP_ROUTES} from '../constants/routes';
import {AUTHORS, COMMON} from '../constants/text';
import useAuthors from '../hooks/useAuthors';
import commonStyles from '../styles/commonStyles';

const AuthorsView = ({navigation}) => {
  const onAuthorPress = ({authorId}) =>
    navigation.dispatch(
      CommonActions.navigate({name: APP_ROUTES.author, params: {authorId}}),
    );
  const {loadingAuthors, authors} = useAuthors();
  return (
    <ScrollView
      style={[commonStyles.commonScreen, commonStyles.horizontalPadding]}>
      <Subtitle content={AUTHORS.title} textStyles={[commonStyles.gutter]} />
      {loadingAuthors ? (
        <Body content={COMMON.loading} />
      ) : (
        <AuthorsList authors={authors} onAuthorPress={onAuthorPress} />
      )}
    </ScrollView>
  );
};

export default AuthorsView;
