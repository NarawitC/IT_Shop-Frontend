import { useParams } from 'react-router-dom';

export const getParams = () => {
  const params = useParams();
  const result = Object.keys(params)[0];
  return result;
};
