import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import ErrorPage from "../pages/errorPage";
import ViewMovieDetails from "../pages/viewMovieDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Dashboard />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "movie/:imdbId",
      element: <ViewMovieDetails />,
    },
  ],
  {
    basename: "/syntax_exercise_pagination/",
  }
);
export default router;
