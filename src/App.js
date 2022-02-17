import Home from "./components/Home";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import { useState } from "react";
import { getStorage } from "./helper/setStorage";

function App() {
  const [user, setUser] = useState(getStorage());

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Provider>
  );
}

export default App;
