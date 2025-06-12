
function Header() {
    return (
        <header className="bg-[#F5F5F5] border-b border-neutral-200 sticky top-0 z-50">

            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl tracking-tight font-[300] uppercase">
                        Cascade Space
                    </h1>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a
                        className="text-sm font-mono uppercase tracking-wider transition-colors hover:text-primary-500"
                        href="/about"
                    >
                        About
                    </a>
                    <a
                        className="text-sm font-mono uppercase tracking-wider transition-colors hover:text-primary-500"
                        href="/careers"
                    >
                        Careers
                    </a>
                </nav>

                <button
                    className="md:hidden text-neutral-900 focus:outline-none"
                    aria-label="Open menu"
                    aria-expanded="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1={4} x2={20} y1={12} y2={12} />
                        <line x1={4} x2={20} y1={6} y2={6} />
                        <line x1={4} x2={20} y1={18} y2={18} />
                    </svg>
                </button>
            </div>
        </header>

    )
}

export default Header