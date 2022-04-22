import React from 'react';
import {View} from 'react-native';
import LolaCategories from '../components/LolaCategories';
import PostList, {mockPosts} from '../components/posts/PostList';
import commonStyles from '../styles/commonStyles';

const HomeView = () => {
  return (
    <View style={[commonStyles.horizontalPadding, commonStyles.commonScreen]}>
      <LolaCategories />
      <PostList posts={mockPosts} />
      {/* <ScrollView style={{}}></ScrollView> */}
    </View>
  );
};

export default HomeView;
