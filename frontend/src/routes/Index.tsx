import { BrowserRouter } from "react-router-dom";
import MainRoute from "./mainRoute.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Main() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
            <title>PRoject 1</title>
        </Helmet>
        <MainRoute />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Main;
