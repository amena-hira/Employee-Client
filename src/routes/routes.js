import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>
    }
])
export default routes;