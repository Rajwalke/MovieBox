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
  ],
  {
    future: {
      //  v7_startTransition: true,
      v7_startTransition: true,
// Enable React.startTransition fr state updates
      v7_fetcherPersist: true, // Enable opersistence behavior for fetchers
      v7_normalizeFormMethod: true, // Normalize formMethod fields to uppercase
      v7_partialHydration: true, // Enable new RouterProvider hydration behavior
      v7_skipActionErrorRevalidation: true, // Update revalidation behavior for 4xx/5xx responses
      v7_relativeSplatPath: true, // Enable relative splat path changes
    },
  }
)
  return (
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
  );
}
 
export default App;
