import { RouterProvider } from "react-router-dom";
import { router } from "./app/presentation/router/router";
import { Navbar } from "./app/presentation/shared/components/Navbar";


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
