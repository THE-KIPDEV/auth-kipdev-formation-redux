import { Navigate } from "react-router-dom";
import { selectToken } from '../Store/UserSlice';
import { useSelector } from "react-redux";


export const NoAuthGuard = ({ Child }: { Child: React.FC }): JSX.Element => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/dashboard" /> : <Child />;
};
