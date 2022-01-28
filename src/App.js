import AppProvider from "./utils/AppContext";
import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/loading";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AppProvider>
          <Home />
        </AppProvider>
      </Suspense>
    </BrowserRouter>
  );
}
