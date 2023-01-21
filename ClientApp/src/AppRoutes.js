import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { MyClassComponent } from "./components/MyComponents/MyClassComponent";
import MyFunctionalComponent from "./components/MyComponents/MyFunctionalComponent";
import LibraryComponent from "./components/MyComponents/LibraryComponent";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/MyClassComponent',
    element: <MyClassComponent />
    },
  {
      path: '/MyFunctionalComponent',
      element: <MyFunctionalComponent />
  },
  {
    path: '/Library',
    element: <LibraryComponent />
  }
];

export default AppRoutes;
