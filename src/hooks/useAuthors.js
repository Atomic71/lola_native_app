import pokemon from 'pokemon';
import React from 'react';
const mockAuthors = [
  {
    albumId: 1,
    id: 1,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/92c952',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 2,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/771796',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 3,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/24f355',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 4,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/d32776',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 5,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/f66b97',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 6,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/56a8c2',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 7,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/b0f7cc',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 8,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/54176f',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 9,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/51aa97',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 10,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/810b14',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 11,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/1ee8a4',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 12,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/66b7d2',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 13,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/197d29',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 14,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/61a65',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 15,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/f9cee5',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 16,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/fdf73e',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 17,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/9c184f',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 18,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/1fe46f',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 19,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/56acb2',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 20,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/8985dc',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 21,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/5e12c6',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 22,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/45601a',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 23,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/e924e6',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 24,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/8f209a',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 25,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/5e3a73',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 26,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/474645',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 27,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/c984bf',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 28,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/392537',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 29,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/602b9e',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 30,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/372c93',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 31,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/a7c272',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 32,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/c70a4d',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 33,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/501fe1',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 34,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/35185e',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 35,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/c96cad',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
  {
    albumId: 1,
    id: 36,
    title: `${pokemon.random()} ${pokemon.random()}`,
    authorImg: 'https://via.placeholder.com/600/4d564d',
    shortBio:
      "You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an initialParams prop:",
  },
];

const useAuthors = () => {
  const [authors, setAuthors] = React.useState([]);
  const [loadingAuthors, setLoadingAuthors] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAuthors(mockAuthors);
      setLoadingAuthors(false);
    }, 2500);
  }, []);
  return {
    authors,
    loadingAuthors,
  };
};

export default useAuthors;
