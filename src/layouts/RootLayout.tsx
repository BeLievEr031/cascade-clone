import { Outlet } from "react-router-dom"

function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col font-oswald">
            <Outlet />
        </div>
    )
}

export default RootLayout