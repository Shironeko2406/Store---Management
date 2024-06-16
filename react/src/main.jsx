import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.jsx";

import Home from "./Component/Page/Home.jsx";
import CreateStore from "./Component/Page/CreateStore.jsx";
import GetAllStore from "./Component/Page/GetAllStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="" element={<Home></Home>}>
          <Route path="create-store" element={<CreateStore></CreateStore>}></Route>
          <Route path="" element={<GetAllStore></GetAllStore>}></Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
