import React from "react";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import ProductState from "./context/ProductState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <AuthProvider>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AVxE4OsPYQFvrnhcDPeu1x78puMjbmXWKJM4bXqIJF3t86N46keduJHroaUFzly_eVB5Vd9X9zBI1p4n",
        }}
      >
        <ProductState>
          <AppRouter />
        </ProductState>
      </PayPalScriptProvider>
    </AuthProvider>
  );
};

export default App;
