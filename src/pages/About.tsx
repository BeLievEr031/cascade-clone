
function About() {
    return (
        <main className="flex-grow">
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl mb-12 tracking-tight text-center font-heading">
                        About Cascade Space
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        <div className="bg-neutral-100 border border-neutral-200 p-8">
                            <div className="aspect-square relative mb-6 overflow-hidden bg-neutral-200">
                                <img
                                    alt="Jacob Portukalian"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover"
                                    src="https://cascade.space/images/jacob-headshot.jpg"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: 0,
                                        color: "transparent"
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-heading">Jacob Portukalian</h3>
                                    <div className="text-xs border border-neutral-900 px-2 py-1 mt-1 inline-block">
                                        Co-Founder, CEO
                                    </div>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm">
                                Jacob started his career at SpaceX where he designed and architected
                                the Crew Dragon communication system. Over the last 15 years he has
                                shipped hardware and software, built teams, and delivered results.
                            </p>
                            <div className="my-4" />
                            <p className="text-neutral-600 text-sm">
                                His obsession with RF started at age 13 when he built his first ham
                                radio and he never looked back.
                            </p>
                            <div className="mt-4 h-1 w-12 bg-primary" />
                            <div className="flex items-center space-x-2 mt-4">
                                <a
                                    href="https://x.com/jportukalian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Jacob Portukalian on X"
                                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                                        <img
                                            alt="X logo"
                                            loading="lazy"
                                            width={16}
                                            height={16}
                                            decoding="async"
                                            data-nimg={1}
                                            className="inline-block align-middle"
                                            src="https://cascade.space/images/x-logo.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jacob-portukalian/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Jacob Portukalian on LinkedIn"
                                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                    <div className="flex items-center justify-center">
                                        <img
                                            alt="LinkedIn logo"
                                            loading="lazy"
                                            width={26}
                                            height={26}
                                            decoding="async"
                                            data-nimg={1}
                                            className="inline-block align-middle"
                                            src="https://cascade.space/images/linkedin_black.png"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="bg-neutral-100 border border-neutral-200 p-8">
                            <div className="aspect-square relative mb-6 overflow-hidden bg-neutral-200">
                                <img
                                    alt="Arlen Abraham"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover"
                                    src="https://cascade.space/images/arlen-headshot.jpg"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: 0,
                                        color: "transparent"
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-heading">Arlen Abraham</h3>
                                    <div className="text-xs border border-neutral-900 px-2 py-1 mt-1 inline-block">
                                        Co-Founder, CTO
                                    </div>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm">
                                Arlen co-founded Cascade Space, bringing his experience leading
                                mission-critical launch systems development at Astra where he
                                managed cross-functional teams and built ruggedized infrastructure
                                for rocket launches. He draws on his track record of shipping
                                complex hardware products and scaling technical operations at
                                startups including SPAN and Orion Labs.
                            </p>
                            <div className="mt-4 h-1 w-12 bg-primary" />
                            <div className="flex items-center space-x-2 mt-4">
                                <a
                                    href="https://www.linkedin.com/in/arlenabraham/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Arlen Abraham on LinkedIn"
                                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                    <div className="flex items-center justify-center">
                                        <img
                                            alt="LinkedIn logo"
                                            loading="lazy"
                                            width={26}
                                            height={26}
                                            decoding="async"
                                            data-nimg={1}
                                            className="inline-block align-middle"
                                            src="https://cascade.space/images/linkedin_black.png"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="bg-neutral-100 border border-neutral-200 p-8">
                            <div className="aspect-square relative mb-6 overflow-hidden bg-neutral-200">
                                <img
                                    alt="Brett Gottula"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover"
                                    src="https://cascade.space/images/brett-headshot.jpg"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: 0,
                                        color: "transparent"
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-heading">Brett Gottula</h3>
                                    <div className="text-xs border border-neutral-900 px-2 py-1 mt-1 inline-block">
                                        Principal Communication Systems Engineer
                                    </div>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm">
                                Brett brings deep expertise in spacecraft communications from over a
                                decade at SpaceX and Astranis. At SpaceX, he led development of
                                mission-critical modems for Crew Dragon and Starlink. At Astranis,
                                he architected the MicroGEO satellite communication system from
                                design through operations. His passion for space extends to amateur
                                astronomy and automated satellite tracking software.
                            </p>
                            <div className="mt-4 h-1 w-12 bg-primary" />
                            <div className="flex items-center space-x-2 mt-4">
                                <a
                                    href="https://www.linkedin.com/in/brett-gottula/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Brett Gottula on LinkedIn"
                                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                    <div className="flex items-center justify-center">
                                        <img
                                            alt="LinkedIn logo"
                                            loading="lazy"
                                            width={26}
                                            height={26}
                                            decoding="async"
                                            data-nimg={1}
                                            className="inline-block align-middle"
                                            src="https://cascade.space/images/linkedin_black.png"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-neutral-900 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl mb-12 tracking-tight text-center font-heading">
                        Our Mission
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-center mb-8 text-neutral-300">
                            We believe in an optimistic future for humanity, where many more
                            people are living throughout the solar system than any one planet
                            could ever sustain.
                        </p>
                        <p className="text-lg text-center mb-8 text-neutral-300">
                            Building that future starts today. It starts with moving beyond low
                            Earth orbit, and reaching the Moon, Mars, and asteroids. It means
                            bringing back metals from asteroids, and even using them to build
                            habitats in space. It means returning a human presence to the Moon,
                            and sustaining it this time.
                        </p>
                        <p className="text-lg text-center mb-8 text-neutral-300">
                            It also means building a company of the future. AI is here to stay,
                            and is already reshaping what even a hardware company like Cascade can
                            do. We are building the company we always dreamed of working for,
                            where thoughtful people pursue aggressive goals. We are committed to
                            achieving more with fewer people than any hardware company, while
                            inspiring our people to be the best versions of themselves. We are not
                            a family, but we <em>are</em> a team, and together we are bigger than
                            the sum of our parts.
                        </p>
                        <p className="text-lg text-center mb-8 text-neutral-300">
                            Cascade Space is building the communications company of the future,
                            for companies that want to build the future, today.
                        </p>
                    </div>
                </div>
            </section>
            <section role="region" className="py-4 bg-white ">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl mb-3 tracking-tight text-center font-heading">
                        BACKERS
                    </h2>
                    <div className="flex justify-center items-center gap-8">
                        <div className="relative h-6 w-auto">
                            <img
                                alt="Undeterred Capital"
                                loading="lazy"
                                width={0}
                                height={24}
                                decoding="async"
                                data-nimg={1}
                                className="h-6 w-auto"
                                src="https://cascade.space/images/undeterred_logo.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <div className="relative h-6 w-auto">
                            <img
                                alt="Y Combinator"
                                loading="lazy"
                                width={0}
                                height={24}
                                decoding="async"
                                data-nimg={1}
                                className="h-6 w-auto"
                                src="https://cascade.space/images/yc_logo.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default About