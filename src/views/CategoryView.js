import React from 'react';
import {ScrollView} from 'react-native';
import PostList, {mockPosts} from '../components/posts/PostList';
import categories from '../constants/categories';
import {COMMON} from '../constants/text';
import commonStyles from '../styles/commonStyles';

const CategoryView = ({route}) => {
  const {category} = route.params;
  const categoryDict = categories.find(({key}) => key === category);
  console.log(categoryDict);
  return (
    <ScrollView
      style={[commonStyles.commonScreen, commonStyles.horizontalPadding]}>
      <PostList posts={mockPosts} title={COMMON.posts} />
    </ScrollView>
  );
};

export default CategoryView;
