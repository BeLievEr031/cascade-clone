function Footer() {
    return (
        <footer className="bg-footer py-12 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <h3 className="text-2xl mb-4 tracking-tight font-heading text-black font-[300] uppercase">
                            Cascade Space
                        </h3>
                        <p className="text-white/90 text-base max-w-xs">
                            Building the communication backbone for our spacefaring future
                        </p>
                        <div className="mt-8">
                            <p className="text-sm text-white/90">
                                © 2025 Cascade Space. All rights reserved.
                            </p>
                            <div className="flex gap-6 mt-2">
                                <a
                                    className="text-sm text-white/90 hover:text-white transition-colors"
                                    href="/privacy"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    className="text-sm text-white/90 hover:text-white transition-colors"
                                    href="/terms"
                                >
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h4 className="text-xl mb-4 tracking-tight font-heading text-black font-[300]">
                            STAY CONNECTED
                        </h4>
                        <p className="text-white/90 mb-4 text-sm">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="space-y-4" role="form">
                            <div className="hidden">
                                <input
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-label="website"
                                    type="text"
                                    name="website"
                                />
                            </div>
                            <div className="flex gap-2 w-full max-w-md">
                                <input
                                    placeholder="your@email.com"
                                    className="bg-white/10 border border-white/20 px-4 py-2 w-full text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                                    type="email"
                                    name="email"
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-footer px-4 py-2 text-sm uppercase tracking-wider hover:bg-white/90 transition-colors rounded-md whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <div className="mt-8">
                            <h5 className="text-lg mb-4 tracking-tight font-heading text-black">
                                Follow Us
                            </h5>
                            <div className="flex gap-4">
                                <a
                                    href="https://x.com/cascade_space"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Cascade Space on X"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                                        <img
                                            alt="X logo"
                                            loading="lazy"
                                            width={16}
                                            height={16}
                                            decoding="async"
                                            data-nimg={1}
                                            src="https://cascade.space/images/x-logo.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://www.instagram.com/cascade.space/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Cascade Space on Instagram"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                                        <img
                                            alt="Instagram logo"
                                            loading="lazy"
                                            width={16}
                                            height={16}
                                            decoding="async"
                                            data-nimg={1}
                                            src="https://cascade.space/images/instagram-logo.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/cascade-space"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Cascade Space on LinkedIn"
                                    className="text-white/90 hover:text-white transition-colors"
                                >
                                    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                                        <img
                                            alt="LinkedIn logo"
                                            loading="lazy"
                                            width={16}
                                            height={16}
                                            decoding="async"
                                            data-nimg={1}
                                            src="https://cascade.space/images/linkedin_white.png"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer