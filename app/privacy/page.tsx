import { ServiceLayout } from "@/components/service-pages/service-layout";

export default function PrivacyPolicy() {
    return (
        <ServiceLayout>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden">

                {/* Background */}
                {/* <div className="absolute inset-0">
                    <img
                        src="/privacy-banner.jpg"
                        alt="Privacy Policy"
                        className="w-full h-full object-cover"
                    />
                </div> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#4148e6]/70 to-[#00ffff]/80"></div>

                {/* Glow */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-4xl space-y-8">

                        <span className="text-primary font-semibold text-sm px-4 py-2 bg-white/70 backdrop-blur rounded-full inline-block border">
                            Privacy Policy
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Your Privacy Matters
                        </h1>

                        <p className="text-xl text-white max-w-3xl leading-relaxed">
                            Learn how Webingic collects, uses, stores, protects,
                            and manages information when you interact with our
                            website and services.
                        </p>

                    </div>

                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="relative py-20 md:py-28 bg-[#f8f9fd] overflow-hidden">

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.3]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4">

                    {/* Main Card */}
                    <div className="
                        relative overflow-hidden
                        rounded-3xl
                        border border-white/30
                        bg-white/80 backdrop-blur-xl
                        shadow-2xl
                    ">

                        <div className="relative p-8 md:p-14">

                            {/* Header */}
                            <div className="mb-14 pb-10 border-b border-gray-200">

                                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                                    Privacy Policy
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6 text-gray-600">

                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Effective Date:
                                            </span>{" "}
                                            01 January 2022
                                        </p>

                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Website:
                                            </span>{" "}
                                            https://webingic.com
                                        </p>

                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Business Name:
                                            </span>{" "}
                                            Webingic
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Contact Email:
                                            </span>{" "}
                                            hello@webingic.com
                                        </p>

                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Business Location:
                                            </span>{" "}
                                            Karachi, Pakistan
                                        </p>

                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Service Area:
                                            </span>{" "}
                                            International clients only
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* POLICY CONTENT */}
                            <div className="max-w-none text-gray-600 leading-8">

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-2">
                                    1. Introduction
                                </h3>

                                <p className="mb-2">
                                    Welcome to Webingic.
                                </p>

                                <p className="mb-2">
                                    This Privacy Policy explains how Webingic collects,
                                    uses, stores, protects, discloses, and manages
                                    information when you visit our website, contact us,
                                    request a quote, purchase services, communicate with us,
                                    or otherwise interact with us.
                                </p>

                                <p className="mb-2">
                                    Webingic provides professional digital services,
                                    including website development, mobile application
                                    development, e-commerce development, user interface and
                                    user experience design, branding, logo design, digital
                                    marketing support, website maintenance, and related
                                    technology services.
                                </p>

                                <p className="mb-2">
                                    Our services are intended for international business
                                    clients, founders, companies, startups, agencies, and
                                    professional clients located outside Pakistan.
                                

                                
                                    By using our website or communicating with us, you
                                    acknowledge that you have read and understood this
                                    Privacy Policy.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    2. Scope of This Privacy Policy
                                </h3>

                                <p className="mb-2">
                                    This Privacy Policy applies to information collected through:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-2">
                                    <li>Our website, webingic.com.</li>
                                    <li>Contact forms on our website.</li>
                                    <li>Email communications with Webingic.</li>
                                    <li>Project discussions, quotations, invoices, and contracts.</li>
                                    <li>Client onboarding forms or questionnaires.</li>
                                    <li>Project management tools and communication platforms.</li>
                                    <li>Analytics, cookies, server logs, and tracking technologies.</li>
                                </ol>

                                <p className="mb-2">
                                    This Privacy Policy does not apply to third-party
                                    platforms, payment processors, hosting providers,
                                    analytics providers, or external tools that we do not
                                    own or control.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    3. International Service Notice
                                </h3>

                                <p className="mb-2">
                                    Webingic is based in Pakistan but provides digital
                                    services to international clients only.
                                </p>

                                <p className="mb-2">
                                    Because our clients may be located in different
                                    countries, your information may be processed, stored, or
                                    accessed in countries different from your country of
                                    residence.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    4. Information We Collect
                                </h3>

                                <p className="mb-2">
                                    We collect only the information reasonably necessary to
                                    operate our website, respond to inquiries, provide
                                    services, manage projects, process payments, protect our
                                    business, comply with legal obligations, and improve our
                                    operations.
                                </p>

                                <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                                    4.1 Information You Provide Directly
                                </h3>

                                <ol className="list-decimal pl-6 space-y-3 mb-2">
                                    <li>Your name</li>
                                    <li>Business name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Country or region</li>
                                    <li>Business website</li>
                                    <li>Project requirements</li>
                                    <li>Budget and timeline information</li>
                                    <li>Billing details</li>
                                    <li>Brand assets and files</li>
                                    <li>Website credentials if required for a project</li>
                                    <li>Communications and attachments</li>
                                </ol>

                                <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                                    4.2 Technical Information
                                </h3>

                                <ol className="list-decimal pl-6 space-y-3 mb-2">
                                    <li>IP address</li>
                                    <li>Browser type</li>
                                    <li>Device type</li>
                                    <li>Operating system</li>
                                    <li>Pages visited</li>
                                    <li>Date and time of visit</li>
                                    <li>Cookies and analytics data</li>
                                    <li>Server logs</li>
                                </ol>

                                <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
                                    4.3 Cookies and Tracking Technologies
                                </h3>

                                <p className="mb-2">
                                    Our website may use cookies, pixels, scripts, and
                                    similar technologies to improve functionality, analyze
                                    traffic, measure performance, support security, and
                                    prevent abuse.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    5. Information We Do Not Intentionally Collect
                                </h3>

                                <p className="mb-2">
                                    We do not intentionally request or collect highly
                                    sensitive information unless strictly necessary and
                                    agreed in writing.
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-2">
                                    <li>Government identification documents</li>
                                    <li>Full credit card numbers</li>
                                    <li>Health information</li>
                                    <li>Biometric data</li>
                                    <li>Criminal records</li>
                                    <li>Children’s data</li>
                                    <li>Political opinions</li>
                                    <li>Religious beliefs</li>
                                </ol>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">7. Legal Bases for Processing</h3>

                                <ol>
                                    <li>
                                        <strong>Contract:</strong> To provide services and
                                        perform agreements.
                                    </li>

                                    <li>
                                        <strong>Legitimate Interests:</strong> To operate our
                                        business, improve our website, and secure systems.
                                    </li>

                                    <li>
                                        <strong>Consent:</strong> Where you voluntarily
                                        provide information or accept cookies.
                                    </li>

                                    <li>
                                        <strong>Legal Obligation:</strong> To comply with
                                        applicable laws and regulations.
                                    </li>
                                </ol>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">8. Client Responsibility</h3>

                                <p>
                                    Clients are responsible for ensuring they have the legal
                                    right to share any information, content, files, personal
                                    data, or materials with Webingic.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">9. Contractors and Service Providers</h3>

                                <p>
                                    We may work with developers, designers, hosting
                                    providers, analytics providers, payment processors,
                                    communication platforms, and other service providers who
                                    may access information only as needed to perform
                                    services.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">10. Artificial Intelligence and Automation Tools</h3>

                                <p>
                                    Webingic may use AI assisted tools, development tools,
                                    automation platforms, analytics tools, and modern
                                    software solutions to improve productivity and project
                                    delivery.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">11. How We Share Information</h3>

                                <p>
                                    We do not sell personal information in the ordinary
                                    meaning of selling customer data for money.
                                </p>

                                <p>
                                    Information may be shared with service providers,
                                    contractors, legal advisors, payment processors, or when
                                    legally required.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">12. International Transfers</h3>

                                <p>
                                    Because Webingic serves international clients, your
                                    information may be transferred, stored, or processed in
                                    countries outside your jurisdiction.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">13. Data Retention</h3>

                                <p>
                                    We retain information only as long as reasonably
                                    necessary for business, legal, accounting, security, or
                                    dispute resolution purposes.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">14. Security</h3>

                                <p>
                                    We use reasonable technical and organizational safeguards
                                    including password protection, access controls, secure
                                    hosting, backups, and confidentiality practices.
                                </p>

                                <p>
                                    However, no system or internet transmission is completely
                                    secure, and we cannot guarantee absolute security.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">15. Website Credentials and Client Access</h3>

                                <p>
                                    Clients remain responsible for their own accounts,
                                    passwords, permissions, and systems.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">16. Client Content and Third-Party Rights</h3>

                                <p>
                                    Clients are responsible for all content, files,
                                    materials, trademarks, logos, software, and data they
                                    provide to Webingic.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">17. Children’s Privacy</h3>

                                <p>
                                    Our website and services are intended for business and
                                    professional clients and are not directed toward
                                    children.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">18. Marketing Communications</h3>

                                <p>
                                    We may send service-related communications, invoices,
                                    project updates, payment reminders, or administrative
                                    notices.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">19. Analytics and Tracking</h3>

                                <p>
                                    We may use analytics tools to understand how visitors
                                    interact with our website and improve website
                                    performance.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5" >20. Do Not Track Signals</h3>

                                <p>
                                    Some browsers may send Do Not Track or privacy signals.
                                    Our website may not respond to all such signals unless
                                    legally required.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">21. Your Privacy Rights</h3>

                                <ol>
                                    <li>Request access to personal information</li>
                                    <li>Request correction of inaccurate information</li>
                                    <li>Request deletion of certain information</li>
                                    <li>Object to certain processing</li>
                                    <li>Request restriction of processing</li>
                                    <li>Withdraw consent where applicable</li>
                                </ol>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">22. Privacy Requests</h3>

                                <p>
                                    To submit a privacy request, contact us at:
                                </p>

                                <div className="
                                    my-8 rounded-2xl
                                    bg-gradient-to-br from-primary/5 to-cyan-50
                                    border border-primary/10
                                    p-8
                                ">
                                    <p className="font-semibold text-gray-900">
                                        Email: hello@webingic.com
                                    </p>

                                    <p className="mt-2 text-gray-600">
                                        Please include your name, email address,
                                        country or region, and details regarding your
                                        request.
                                    </p>
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">23. No Sale of Personal Information</h3>

                                <p>
                                    We do not sell personal information for money.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">24. California Privacy Notice</h3>

                                <p>
                                    California residents may have additional rights regarding
                                    access, deletion, correction, portability, and opting
                                    out of certain uses of personal information.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">25. European Economic Area and UK Notice</h3>

                                <p>
                                    If applicable law applies, users located in the European
                                    Economic Area or United Kingdom may have rights under
                                    relevant privacy regulations.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">26. Client Data Processing Terms</h3>

                                <p>
                                    We process client-provided personal data only for the
                                    agreed project purpose unless otherwise required by law.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">27. Third-Party Links</h3>

                                <p>
                                    Our website may contain links to third-party websites,
                                    tools, platforms, or services that operate under their
                                    own policies and terms.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5" >28. Third-Party Tools Used in Projects</h3>

                                <p>
                                    Client projects may involve third-party platforms,
                                    hosting services, APIs, payment gateways, analytics
                                    tools, plugins, and software libraries.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">29. Data Accuracy</h3>

                                <p>
                                    You are responsible for providing accurate, complete, and
                                    current information.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">30. Data Deletion After Project Completion</h3>

                                <p>
                                    After a project ends, we may delete project files,
                                    credentials, drafts, backups, and working materials at
                                    our discretion.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">31. Confidentiality</h3>

                                <p>
                                    We take reasonable steps to keep client project
                                    information confidential unless disclosure is legally
                                    required or necessary for service delivery.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5">32. Changes to This Privacy Policy</h3>

                                <p>
                                    We may update this Privacy Policy periodically. Updated
                                    versions become effective when posted on our website.
                                </p>

                                <h3 className="text-3xl font-bold text-gray-900 mt-14 mb-5" >33. Contact Us</h3>

                                <p>
                                    If you have questions regarding this Privacy Policy or
                                    how we handle information, contact us at:
                                </p>

                                <div className="
                                    mt-8 rounded-3xl
                                    bg-gradient-to-br from-[#025EE6] to-[#1e293b]
                                    p-10 text-white
                                    shadow-xl
                                ">

                                    <h3 className="text-2xl font-bold text-white mb-6">
                                        Webingic
                                    </h3>

                                    <div className="space-y-3 text-gray-300">

                                        <p>
                                            Email: hello@webingic.com
                                        </p>

                                        <p>
                                            Website: https://webingic.com
                                        </p>

                                        <p>
                                            Location: Karachi, Pakistan
                                        </p>

                                        <p>
                                            Service Area: International clients only
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </ServiceLayout>
    )
}