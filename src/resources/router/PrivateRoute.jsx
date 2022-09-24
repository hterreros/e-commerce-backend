import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth.authStatus ? children : <Navigate to="/login" />;
};

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// import { Navigate } from "react-router-dom";

// export default function PrivateRoute({ children }) {
//   const { auth, verifyingToken } = useContext(AuthContext);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     verifyingToken();
//     setLoading(false);
//   }, [verifyingToken]);

//   if (loading) return null;
//   return auth.logged ? children : <Navigate to="/login" />;
// }

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// import { Route, Navigate } from "react-router-dom";

// export default function PrivateRoute({ component: Component, ...props }) {
//   const { auth, verifyingToken } = useContext(AuthContext);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     verifyingToken();
//     setLoading(false);
//   }, [verifyingToken]);

//   return (
//     <Route
//       {...props}
//       render={(props) => {
//         if (loading) return null;

//         return auth.authStatus ? <Component {...props} /> : <Navigate to="/" />;
//       }}
//     />
//   );
// }
