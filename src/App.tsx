import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

const App: FC = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '/'}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
