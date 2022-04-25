export const adaptAuthorForUi = authorServerData => {
  const {id, name, description, avatar_urls} = authorServerData;

  return {
    id,
    name,
    description,
    avatarUrl: avatar_urls['96'] ?? avatar_urls['48'] ?? avatar_urls['24'],
  };
};
