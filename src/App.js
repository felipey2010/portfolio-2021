import AppProvider from "./utils/AppContext";
import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="lazy-loading"></div>}>
        <AppProvider>
          <Home />
        </AppProvider>
      </Suspense>
    </BrowserRouter>
  );
}
