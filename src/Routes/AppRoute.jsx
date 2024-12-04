import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../Layout/BaseLayout/BaseLayout";
import Home from "../Views/Home/Home";
import AboutUs from "../Views/Aboutus/AboutUs";
import BuyHouse from "../Views/Buy/BuyHouse";
import UserMenu from "../Views/Test/Test";
import VillaDetails from "../Views/VillaDetails/VillaDetails";
import BuyHousePage from "../Views/BuyHouse/BuyHousePage";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <BaseLayout>
        <AboutUs />
      </BaseLayout>
    ),
  },
  {
    path: "/buy-home",
    element: (
      <BaseLayout>
        <BuyHousePage />
      </BaseLayout>
    ),
  },
  {
    path: "/villa",
    element: (
      <BaseLayout>
        <VillaDetails />
      </BaseLayout>
    ),
  },
]);
