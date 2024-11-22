import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll } from "../views/index";
import BaseLayout from "../layouts/BaseLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route excat path = "/" element = { <BaseLayout /> }>
                <Route exact path = "/" element = { <Home />} />
                <Route exact path = "/error" element = { <Error />} />
                <Route exact path = "/games" element = { <ViewGameAll />} />
                <Route exact path = "/games/:gameId" element = {<ViewGameDetails />} />
                <Route exact path = "/stores" element = { <ViewStoreAll /> } />
                <Route exact path = "/stores/:storeId" element = { <ViewStoreDetails /> } />
                <Route exact path = "/creators" element = { <ViewCreatorAll /> } />
                <Route exact path = "*" element = { <Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
