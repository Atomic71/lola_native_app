import React from 'react';
import {View} from 'react-native';
import PostListItem from './PostListItem';

const PostList = ({posts}) => {
  return (
    <View>
      {posts.map(post => (
        <PostListItem
          key={post.id}
          coverImg={post.coverImg}
          author={post.author}
          title={post.title}
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
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/92c95',
      name: 'Redakcija',
    },
  },
  {
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    coverImg: 'https://via.placeholder.com/600/771796',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/77179',
      name: 'Redakcija',
    },
  },
  {
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    coverImg: 'https://via.placeholder.com/600/24f355',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/24f35',
      name: 'Redakcija',
    },
  },
  {
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    coverImg: 'https://via.placeholder.com/600/d32776',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/d3277',
      name: 'Redakcija',
    },
  },
  {
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    coverImg: 'https://via.placeholder.com/600/f66b97',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/f66b9',
      name: 'Redakcija',
    },
  },
  {
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    coverImg: 'https://via.placeholder.com/600/56a8c2',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c',
      name: 'Redakcija',
    },
  },
  {
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    coverImg: 'https://via.placeholder.com/600/b0f7cc',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
      name: 'Redakcija',
    },
  },
  {
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    coverImg: 'https://via.placeholder.com/600/54176f',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/54176f',
      name: 'Redakcija',
    },
  },
  {
    id: 9,
    title: 'qui eius qui autem sed',
    coverImg: 'https://via.placeholder.com/600/51aa97',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
      name: 'Redakcija',
    },
  },
  {
    id: 10,
    title: 'beatae et provident et ut vel',
    coverImg: 'https://via.placeholder.com/600/810b14',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/810b14',
      name: 'Redakcija',
    },
  },
  {
    id: 11,
    title: 'nihil at amet non hic quia qui',
    coverImg: 'https://via.placeholder.com/600/1ee8a4',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/1ee8a4',
      name: 'Redakcija',
    },
  },
  {
    id: 12,
    title:
      'mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores',
    coverImg: 'https://via.placeholder.com/600/66b7d2',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/66b7d2',
      name: 'Redakcija',
    },
  },
  {
    id: 13,
    title: 'repudiandae iusto deleniti rerum',
    coverImg: 'https://via.placeholder.com/600/197d29',
    author: {
      thumbnailUrl: 'https://via.placeholder.com/150/197d29',
      name: 'Redakcija',
    },
  },
];
