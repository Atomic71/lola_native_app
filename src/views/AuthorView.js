import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthorProfile from '../components/authors/AuthorProfile';
import {BackButton} from '../components/common/Buttons';
import {Body} from '../components/common/Typography';
import PostList, {mockPosts} from '../components/posts/PostList';
import {COMMON} from '../constants/text';
import useAuthor from '../hooks/useAuthor';
import commonStyles from '../styles/commonStyles';

const styles = StyleSheet.create({
  viewContainer: {
    position: 'relative',
    paddingTop: 20,
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    zIndex: 2,
  },
});

const AuthorView = ({navigation, goBack, route: {params}, ...rest}) => {
  const {author, loadingAuthor} = useAuthor(params.authorId);
  return (
    <SafeAreaView
      style={[commonStyles.horizontalPadding, styles.viewContainer]}>
      <View>
        <BackButton
          style={[styles.backButtonContainer]}
          onPress={navigation.goBack}
        />
      </View>
      {loadingAuthor ? (
        <Body content={COMMON.loading} />
      ) : (
        <React.Fragment>
          <AuthorProfile
            author={author}
            wrapperStyles={[commonStyles.gutter]}
          />
        </React.Fragment>
      )}
      <ScrollView contentContainerStyle={{}}>
        <PostList posts={mockPosts} hideAuthorInfo title={COMMON.posts} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthorView;
