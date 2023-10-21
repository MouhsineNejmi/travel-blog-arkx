import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCurrentUser,
  selectCurrentToken,
} from '../../features/auth/auth.slice';

const Post = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <h1>{`Welcome to post page ${user.username}`}</h1>
  ) : (
    <Navigate to='/signin-signup' state={{ from: location }} replace />
  );
};

export default Post;
