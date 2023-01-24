import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const DimarApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
