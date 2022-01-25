import { gql, useQuery } from "@apollo/client";

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetPhotos = (categoryId) => {
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId },
  });

  return { loading, error, data };
};
