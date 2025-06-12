import { LucideMenu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

function Header() {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    return (
        <header className="bg-[#F5F5F5] border-b border-neutral-200 sticky top-0 z-50">

            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {location.pathname.split("/")[1] === "" ?
                        <h1 className="text-3xl tracking-tight font-[300] uppercase font-heading">
                            Cascade Space
                        </h1> :
                        <Link to={"/"} className="text-3xl cursor-pointer tracking-tight font-[300] uppercase font-heading">
                            Cascade Space
                        </Link>
                    }
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-sm font-mono uppercase tracking-wider transition-colors hover:text-primary-500"
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-mono uppercase tracking-wider transition-colors hover:text-primary-500"
                        to="/careers"
                    >
                        Careers
                    </Link>
                </nav>

                <button
                    className="md:hidden cursor-pointer text-neutral-900 focus:outline-none"
                    aria-label="Open menu"
                    aria-expanded="false"
                    onClick={() => setVisible(!visible)}
                >
                    {!visible ? <LucideMenu /> : <X />}
                </button>
            </div>
            {visible && <div
                className="md:hidden bg-[#F5F5F5] border-t border-neutral-200"
                data-testid="mobile-menu"
            >
                <nav className="flex flex-col py-4 px-4">
                    <Link
                        className="py-3 text-sm uppercase tracking-wider transition-colors hover:text-primary-500"
                        to="/about"
                    >
                        About
                    </Link>
                    <a
                        className="py-3 text-sm uppercase tracking-wider transition-colors text-primary-500"
                        href="/careers"
                    >
                        Careers
                    </a>
                </nav>
            </div>}
        </header >

    )
}

export default Header