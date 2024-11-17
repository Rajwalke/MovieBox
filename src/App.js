import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browser from "./components/Browser";
import './App.css';
const App=()=> {
  const appRouter=createBrowserRouter([
      {
        path:"/",
        element:<Body/>

      },
      {
        path:"/browser",
        element:<Browser/>
      }
  ])
  return (
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
  );
}
 
export default App;
