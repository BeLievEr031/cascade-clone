
function Careers() {
    return (
        <main className="flex-grow py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-[#F5F5F5] p-8 border border-neutral-200">
                    <h1 className="text-3xl mb-8 tracking-tight font-heading">
                        Join Our Team
                    </h1>
                    <div className="space-y-6 mb-8">
                        <p className="text-neutral-600 text-lg">
                            We currently have no open positions as we're a small, focused team of
                            two founders building our vision from the ground up.
                        </p>
                        <p className="text-neutral-600 text-lg">
                            However, if you're as excited about building the future of space as we
                            are and believe your skills could contribute to our mission down the
                            road, we'd still like to hear from you. Send us your resume and we'll
                            keep your information on file for when we're ready to expand our team.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">
                                    Subscribe to our newsletter
                                </h2>
                                <p className="text-neutral-600">
                                    Stay updated on our progress and be the first to know when we
                                    start hiring.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Send us a note</h2>
                                <p className="text-neutral-600 mb-4">
                                    We'd love to hear from you and keep your information on file for
                                    future opportunities.
                                </p>
                                <button
                                    className="button flex items-center gap-2 transition-all duration-300 text-white bg-neutral-800 hover:bg-neutral-700 border-neutral-700"
                                    aria-label="Copy email to clipboard"
                                    aria-live="polite"
                                    data-state="closed"
                                >
                                    <span aria-hidden="false">CONTACT US</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Careers