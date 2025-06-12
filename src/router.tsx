import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "careers",
                element: <Careers />
            }
        ]
    }
])

export default router;