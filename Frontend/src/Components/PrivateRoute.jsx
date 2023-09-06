// PrivateRoute.js
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const user = useSelector((state) => state.Trippy.trippyUser);

  // Check if the user is an admin (You may have a different way of identifying admins)
  const isAdmin = user.isAdmin; // Replace with your actual logic to check admin status

  return (
    <Route
      {...rest} 
      element={isAdmin ? <Element /> : <Navigate to="/Home" />}
    />
  );
};

export default PrivateRoute;
