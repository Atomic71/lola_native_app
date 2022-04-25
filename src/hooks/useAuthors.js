import {useQuery} from 'react-query';
import client from '../api/apiClient';
import {adaptAuthorForUi} from './utils/adaptAuthorForUI';

const getAuthors = async () => {
  const {data} = await client.get(
    '/users?_fields=id,name,description,avatar_urls&per_page=100',
  );
  return data.map(author => {
    return adaptAuthorForUi(author);
  });
};

const useAuthors = () => {
  const {data, isLoading, isFetched} = useQuery('authors', getAuthors);

  return {
    authors: data || [],
    loadingAuthors: isLoading,
  };
};

export default useAuthors;
