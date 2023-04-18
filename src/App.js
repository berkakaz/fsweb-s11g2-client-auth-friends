import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./layout/Layout";
import LoginPage from "./pages/loginPage/LoginPage";
import FriendsPage from "./pages/friendsPage/FriendsPage";
import { AuthContext } from "./context/AuthContext";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AddFriendPage from "./pages/addFriendPage/AddFriendPage";

function App() {
  const localStorageKey = "token";
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loggedInToken, setLoggedInToken] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          localStorageKey,
          setisLoggedIn,
          isLoggedIn,
          loggedInToken,
          setLoggedInToken,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/friends/add" element={<AddFriendPage />} />
          </Route>
        </Routes>
        <ToastContainer position="bottom-right" />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
