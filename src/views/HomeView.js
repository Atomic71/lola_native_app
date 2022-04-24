import React from 'react';
import {View, ScrollView} from 'react-native';
import LolaCategories from '../components/LolaCategories';
import PostList, {mockPosts} from '../components/posts/PostList';
import PostTrack from '../components/posts/PostTrack';
import commonStyles from '../styles/commonStyles';

const HomeView = () => {
  return (
    <ScrollView>
      <View style={[commonStyles.horizontalPadding, commonStyles.commonScreen]}>
        <LolaCategories wrapperStyles={[commonStyles.gutter]} />
        <PostTrack posts={mockPosts} wrapperStyles={[commonStyles.gutter]} />
        <PostList posts={mockPosts} wrapperStyles={[commonStyles.gutter]} />
      </View>
    </ScrollView>
  );
};

export default HomeView;
