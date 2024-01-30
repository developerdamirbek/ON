import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Home } from "../pages/home";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Products />,
    path: "products",
  },
];
