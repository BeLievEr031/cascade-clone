import { LucideCircuitBoard, LucideClipboardCheck, LucideLightbulb, LucideSatellite } from "lucide-react"
import PopoverBtn from "../components/PopoverBtn"

function Home() {
    return (
        <main className="flex-grow">
            <section className="relative py-16 md:py-24 bg-neutral-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Four ALMA antennas on the Chajnantor plain"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover opacity-90"
                        src="https://cascade.space/images/alma-jfs-2010-10.jpg"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                            color: "transparent"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/30" />
                </div>
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-heading text-primary-500 font-light mb-6 tracking-tight">
                            <span className="md:whitespace-nowrap">Beyond Low Earth Orbit</span>
                        </h2>
                        <p className="text-neutral-300 mb-8 max-w-md">
                            Cut through the noise with our software stack and ground station
                            network. Iterate faster, test efficiently, launch with confidence.
                        </p>
                        <div className="flex gap-4">
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
            </section>
            <section className="py-16 bg-white" id="features">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl mt-8 md:mt-16 mb-6 md:mb-12 tracking-tight text-center font-heading">
                        Our Products
                    </h2>
                    <section className="bg-white border border-neutral-200">
                        <div className="p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded-lg">
                                        <svg
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={48}
                                            height={48}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            className="text-primary-500"
                                        >
                                            <circle cx={12} cy={12} r={10} />
                                            <line x1={2} y1={12} x2={22} y2={12} />
                                            <circle cx={17} cy={12} r={5} />
                                            <path d="M22 12 A10 10 0 0 1 12 2" />
                                            <path d="M22 12 A10 10 0 0 0 12 22" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl tracking-tight font-heading">
                                        Cascade Portal
                                    </h2>

                                </div>
                                <PopoverBtn
                                    buttonLable="Book A demo"
                                    popoverHeading="Book a Demo"
                                    popoverDescription="Book a 25 minute call to discuss your mission needs, timeline, roadmap, and pricing."
                                />
                            </div>
                            <p className="text-neutral-600 mb-8">
                                A new model for spacecraft design support services, our online
                                portal allows you to access validated software tools, generate
                                custom test plans, and drop your error prone spreadsheets. Designing
                                your system in the portal ensures maximum compatibility with our
                                ground network and and other networks that we support.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-neutral-50 p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow flex flex-col">
                                    <LucideCircuitBoard />
                                    <h3 className="text-xl mb-2 font-heading">RF Designer</h3>
                                    <div className="h-0.5 w-10 bg-primary-500 mb-4" />
                                    <p className="text-neutral-600 text-sm flex-grow">
                                        Design your spacecraft RF system using commercially available
                                        components. Model performance using link margin tools.
                                    </p>
                                </div>
                                <div className="bg-neutral-50 p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow flex flex-col">
                                    <LucideClipboardCheck />
                                    <h3 className="text-xl mb-2 font-heading">Test Wizard</h3>
                                    <div className="h-0.5 w-10 bg-primary-500 mb-4" />
                                    <p className="text-neutral-600 text-sm flex-grow">
                                        Create test plans for your spacecraft design from proven
                                        templates.
                                    </p>
                                </div>
                                <div className="bg-neutral-50 p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow flex flex-col">
                                    <LucideLightbulb />
                                    <h3 className="text-xl mb-2 font-heading">Design your Own</h3>
                                    <div className="h-0.5 w-10 bg-primary-500 mb-4" />
                                    <p className="text-neutral-600 text-sm flex-grow">
                                        Our team is hard at work building out our feature set and you
                                        can help us prioritize the backlog to get you features you will
                                        use as soon as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-8 bg-white border border-neutral-200">
                        <div className="p-8">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white rounded-lg">
                                        <LucideSatellite />
                                    </div>
                                    <h2 className="text-3xl tracking-tight font-heading">
                                        Cascade Network
                                    </h2>
                                </div>
                                <PopoverBtn
                                    buttonLable="Schedule a Call"
                                    popoverHeading="Schedule Call"
                                    popoverDescription="Book a 25 minute call to discuss your mission needs, timeline, roadmap, and pricing."
                                />
                            </div>
                            <p className="text-neutral-600 mb-8">
                                Ground station network to meet the ever increasing demand for
                                missions beyond low Earth orbit.
                            </p>
                            <div className="mt-8 border border-neutral-200 rounded-lg p-6 py-8 relative bg-neutral-50 hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-heading mb-8 text-center">Roadmap</h3>
                                <div className="hidden md:block absolute top-[112px] left-8 right-8 h-1 bg-neutral-300" />
                                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start relative text-center z-10 gap-8 md:gap-0">
                                    <div className="flex flex-col items-center w-full md:w-1/3 px-2">
                                        <div
                                            className="w-8 h-8 bg-primary-500 border-4 border-neutral-200 rounded-full mb-2 cursor-default hover:shadow-md transition-shadow"
                                            data-state="closed"
                                        />
                                        <h4 className="font-heading text-base mb-1">
                                            Trans-Lunar Injection
                                        </h4>
                                        <p className="text-sm text-neutral-600">Q1 2026</p>
                                    </div>
                                    <div className="flex flex-col items-center w-full md:w-1/3 px-2">
                                        <div
                                            className="w-8 h-8 bg-primary-500 border-4 border-neutral-200 rounded-full mb-2 cursor-default hover:shadow-md transition-shadow"
                                            data-state="closed"
                                        />
                                        <h4 className="font-heading text-base mb-1">
                                            Geo Transfer Orbit
                                        </h4>
                                        <p className="text-sm text-neutral-600">Q3 2026</p>
                                    </div>
                                    <div className="flex flex-col items-center w-full md:w-1/3 px-2">
                                        <div
                                            className="w-8 h-8 bg-primary-500 border-4 border-neutral-200 rounded-full mb-2 cursor-default hover:shadow-md transition-shadow"
                                            data-state="closed"
                                        />
                                        <h4 className="font-heading text-base mb-1">
                                            24/7 Lunar + Deep Space Coverage
                                        </h4>
                                        <p className="text-sm text-neutral-600">2027</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </section >
            <section role="region" className="py-4 bg-white border-t border-neutral-200">
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
        </main >

    )
}

export default Home