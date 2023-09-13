import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import ComponentsPage from "../pages/ComponentsPage";
import AvatarPage from "../documents/avatar/AvatarPage";
import AlertPage from "../documents/alert/AlertPage";
import BadgePage from "../documents/badge/BadgePage";
import ButtonPage from "../documents/button/ButtonPage";
import CardPage from "../documents/card/CardPage";
import HeadingsPage from "../documents/headings/HeadingsPage";
import TextPage from "../documents/text/TextPage";
import ImagePage from "../documents/image/ImagePage";

// React Router version > 6.4
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/components",
        element: <ComponentsPage />,
        children: [
          {
            path: "avatar",
            element: <AvatarPage />,
          },
          {
            path: "alert",
            element: <AlertPage />,
          },
          {
            path: "badge",
            element: <BadgePage />,
          },
          {
            path: "button",
            element: <ButtonPage />,
          },
          {
            path: "card",
            element: <CardPage />,
          },
          {
            path: "headings",
            element: <HeadingsPage />,
          },
          {
            path: "text",
            element: <TextPage />,
          },
          {
            path: "image",
            element: <ImagePage />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
