'use client'

import { ServiceLayout } from "@/components/service-pages/service-layout"
import { CheckCircle2 } from "lucide-react"

const highlights = [
    'Award-winning design and development team',
    'Cutting-edge technology stack',
    'Client-centric approach to every project',
    'Proven track record of success',
    'Transparent communication always',
    'On-time and on-budget delivery',
]

const team = [
    {
        name: 'Sarah Anderson',
        role: 'CEO & Founder',
        bio: 'Visionary leader with 15 years in digital transformation',
    },
    {
        name: 'Marcus Chen',
        role: 'CTO & Lead Developer',
        bio: 'Expert in scalable architecture and cloud solutions',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Head of Design',
        bio: 'Creative designer focused on user-centered experiences',
    },
    {
        name: 'David Thompson',
        role: 'Project Manager',
        bio: 'Ensures seamless delivery and client satisfaction',
    },
    {
        name: 'Lisa Park',
        role: 'Marketing Strategist',
        bio: 'Data-driven marketer maximizing digital ROI',
    },
    {
        name: 'Alex Kumar',
        role: 'Senior Developer',
        bio: 'Full-stack expert in modern web technologies',
    },
]
export default function About() {
    return (
        <ServiceLayout>

            {/* About Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">

                {/* Background Image (team / office / workspace) */}
                <div className="absolute inset-0">
                    <img
                        src="/about.jpg" // 👉 team / office image
                        alt="About Webingic"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Soft Neutral Gradient Overlay (professional tone) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#4148e6]/65 to-[#00ffff]/80"></div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="space-y-6">

                            <span className="text-primary font-semibold text-sm px-4 py-2 bg-white/70 backdrop-blur rounded-full inline-block border">
                                About Webingic
                            </span>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Building Digital Solutions With Purpose
                            </h1>

                            <p className="text-xl text-gray-200 max-w-xl">
                                We are a team of designers, developers, and strategists dedicated to helping businesses grow through modern technology, thoughtful design, and scalable solutions.
                            </p>

                            {/* subtle trust line */}
                            <p className="text-sm text-white">
                                Trusted by startups and growing businesses worldwide.
                            </p>

                        </div>

                        {/* RIGHT VISUAL (EDITORIAL STYLE) */}
                        <div className="relative h-[420px] hidden md:block">

                            {/* Main Image */}
                            {/* <div className="rounded-3xl overflow-hidden shadow-7xl border border-gray-600 ">
                                <img
                                    src="/about-banner.png"
                                    alt="Our Team"
                                    className="w-full h-full object-cover hover:scale-[1.02] transition duration-500"
                                />
                            </div> */}

                            {/* Soft Glow (subtle, not flashy) */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

                        </div>

                    </div>

                </div>
            </section>

            <section
                className="relative py-20 md:py-32 overflow-hidden bg-[#f8f9fd]"
            >

                {/* 🌈 Subtle Rainbow Grid Background */}
                <div className="absolute inset-0 opacity-[0.35]">
                    {/* grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                    {/* rainbow glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-blue-500/10 via-purple-500/10 via-green-500/10 to-yellow-500/10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* LEFT CONTENT */}
                        <div className="space-y-8">

                            <div className="space-y-4">
                                {/* <span className="text-blue-600 font-semibold text-sm px-4 py-2 bg-blue-100 rounded-full inline-block shadow-sm border">
                                    About Us
                                </span> */}

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Who We Are
                                </h2>

                                <p className="text-gray-600 text-lg">
                                    Webingic is a forward-thinking digital solutions company focused on building modern, scalable web and mobile applications that help businesses grow.
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="space-y-3">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT VISUAL (IMAGES) */}
                        <div className="relative hidden md:block">

                            {/* Main Image */}
                            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
                                <img
                                    src="/team-1.avif"
                                    alt="team"
                                    className="w-full h-[380px] object-cover"
                                />
                            </div>

                            {/* Floating Image 1 */}
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden shadow-lg border bg-white">
                                <img
                                    src="/office-1.webp"
                                    alt="office"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Image 2 */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-xl overflow-hidden shadow-lg border bg-white">
                                <img
                                    src="/workspace-1.avif"
                                    alt="workspace"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Image (team / office / workspace) */}
                <div className="absolute inset-0">
                    <img
                        src="/about-members.jpg" // 👉 team / office image
                        alt="About Webingic"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br 
                from-[#0f172a]/70 via-[#1e293b]/50 to-[#f8f9fd]/80"></div>

                {/* Soft Glow Accents */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative max-w-5xl mx-auto px-4">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold text-sm px-4 py-2 bg-white/70 backdrop-blur rounded-full inline-block border border-white/20">
                            Our Team
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                            Meet the People Behind Webingic
                        </h2>

                        <p className="text-gray-300 mt-4">
                            A team of passionate professionals committed to delivering excellence.
                        </p>
                    </div>

                    {/* Team List */}
                    <div className="divide-y border border-white/10 rounded-2xl overflow-hidden shadow-xl">

                        {team.map((member, index) => (
                            <div
                                key={`${member.name}-${index}`}
                                className="
                                group flex flex-col md:flex-row md:items-center justify-between 
                                px-6 py-6 transition-all duration-500 
                                bg-white/90 backdrop-blur-xl 
                                hover:bg-transparent hover:backdrop-blur-0
                                "
                            >
                                {/* Left */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary text-sm font-medium transition group-hover:text-white/80">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Right */}
                                <p className="text-gray-600 text-sm max-w-md mt-3 md:mt-0 transition group-hover:text-white/90">
                                    {member.bio}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>



            <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fd]">

                {/* Subtle Background Glow */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4">

                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <span className="text-primary font-semibold text-sm px-4 py-2 bg-white border rounded-full inline-block shadow-sm">
                            Our Foundation
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-6">
                            Mission & Vision
                        </h2>

                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            The principles that guide our work and define the future we are building.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-10 items-stretch">

                        <div className="relative group">

                            {/* Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Card */}
                            <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-primary/30 via-transparent to-transparent">

                                <div className="h-full bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300">

                                    {/* Top Accent */}
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                        <span className="text-primary text-xl">🚀</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-4">
                                        Our Mission
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        We empower businesses by building scalable, high-performing digital solutions that solve real-world challenges. Our focus is on creating meaningful impact through innovation, performance, and user-centered design.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="relative group">

                            {/* Glow Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Card */}
                            <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-secondary/30 via-transparent to-transparent">

                                <div className="h-full bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300">

                                    {/* Top Accent */}
                                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                                        <span className="text-secondary text-xl">🌍</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-4">
                                        Our Vision
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        Our vision is to become a globally trusted digital partner recognized for innovation, reliability, and excellence—delivering solutions that shape the future of businesses across industries.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </ServiceLayout>

    )
}