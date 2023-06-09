import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppState } from '../app/store';

const Protected = ({ children }: { children: JSX.Element }) => {
  const _isAuthenticated = useSelector(
    (state: AppState) => state.auth.isAuthenticated
  );

  if (!_isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
