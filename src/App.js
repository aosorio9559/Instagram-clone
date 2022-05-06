import React, { Suspense, useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/Logo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { AppContext } from "./context/AppContext";

/* Using React Lazy to load pages on demand only */
const Detail = React.lazy(() =>
  import("./pages/Detail").then((module) => ({ default: module.Detail }))
);
const Favs = React.lazy(() =>
  import("./pages/Favs").then((module) => ({ default: module.Favs }))
);
const Home = React.lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const User = React.lazy(() =>
  import("./pages/User").then((module) => ({ default: module.User }))
);
const NotFound = React.lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);

export const App = () => {
  const { isUserLoggedIn } = useContext(AppContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pet/:categoryId" element={<Home />} />
          <Route exact path="/detail/:detailId" element={<Detail />} />
          <Route
            exact
            path="/favs"
            element={
              isUserLoggedIn ? <Favs /> : <Navigate replace to="/login" />
            }
          />
          <Route
            exact
            path="/user"
            element={
              isUserLoggedIn ? <User /> : <Navigate replace to="/login" />
            }
          />
          <Route
            exact
            path="/login"
            element={
              !isUserLoggedIn ? (
                <NotRegisteredUser />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};
