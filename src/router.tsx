import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <h1>Home page</h1>
            }
        ]
    }
])

export default router;