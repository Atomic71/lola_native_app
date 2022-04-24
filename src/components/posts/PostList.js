import {StackActions, useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import {View} from 'react-native';
import {APP_ROUTES} from '../../constants/routes';
import commonStyles from '../../styles/commonStyles';
import {Body} from '../common/Typography';
import PostListItem from './PostListItem';

const PostList = ({posts, hideAuthorInfo, title}) => {
  const {dispatch} = useNavigation();
  const handlePostPress = postId =>
    dispatch(StackActions.push(APP_ROUTES.post, {postId}));
  return (
    <View>
      {title && (
        <Body content={title} textStyles={[commonStyles.gutterSmall]} />
      )}
      {posts.map(post => (
        <PostListItem
          onPostPress={() => handlePostPress(post.id)}
          wrapperStyles={[commonStyles.gutter]}
          {...post}
          key={post.id}
          hideAuthorInfo={hideAuthorInfo}
        />
      ))}
    </View>
  );
};

export default PostList;
export const mockPosts = [
  {
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    coverImg: 'https://via.placeholder.com/600/92c952',
    authorImg: 'https://via.placeholder.com/150/92c95',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    coverImg: 'https://via.placeholder.com/600/771796',
    authorImg: 'https://via.placeholder.com/150/77179',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    coverImg: 'https://via.placeholder.com/600/24f355',
    authorImg: 'https://via.placeholder.com/150/24f35',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    coverImg: 'https://via.placeholder.com/600/d32776',
    authorImg: 'https://via.placeholder.com/150/d3277',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    coverImg: 'https://via.placeholder.com/600/f66b97',
    authorImg: 'https://via.placeholder.com/150/f66b9',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    coverImg: 'https://via.placeholder.com/600/56a8c2',
    authorImg: 'https://via.placeholder.com/150/56a8c',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    coverImg: 'https://via.placeholder.com/600/b0f7cc',
    authorImg: 'https://via.placeholder.com/150/b0f7cc',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    coverImg: 'https://via.placeholder.com/600/54176f',
    authorImg: 'https://via.placeholder.com/150/54176f',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 9,
    title: 'qui eius qui autem sed',
    coverImg: 'https://via.placeholder.com/600/51aa97',
    authorImg: 'https://via.placeholder.com/150/51aa97',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 10,
    title: 'beatae et provident et ut vel',
    coverImg: 'https://via.placeholder.com/600/810b14',
    authorImg: 'https://via.placeholder.com/150/810b14',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 11,
    title: 'nihil at amet non hic quia qui',
    coverImg: 'https://via.placeholder.com/600/1ee8a4',
    authorImg: 'https://via.placeholder.com/150/1ee8a4',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 12,
    title:
      'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores',
    coverImg: 'https://via.placeholder.com/600/66b7d2',
    authorImg: 'https://via.placeholder.com/150/66b7d2',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
  {
    id: 13,
    title: 'repudiandae iusto deleniti rerum',
    coverImg: 'https://via.placeholder.com/600/197d29',
    authorImg: 'https://via.placeholder.com/150/197d29',
    authorName: 'Redakcija',
    date: dayjs().format('DD/MM/YYYY'),
  },
];
