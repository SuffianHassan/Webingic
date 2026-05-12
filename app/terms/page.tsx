import { ServiceLayout } from "@/components/service-pages/service-layout";

export default function TermsOfService() {
    return (
        <ServiceLayout>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden">

                {/* Background */}
                {/* <div className="absolute inset-0">
                    <img
                        src="/terms-banner.jpg"
                        alt="Terms of Service"
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
                            Terms of Service
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Terms & Conditions
                        </h1>

                        <p className="text-xl text-white max-w-3xl leading-relaxed">
                            Please read these Terms of Service carefully before
                            using Webingic services, website, proposals,
                            deliverables, or digital solutions.
                        </p>

                    </div>

                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="relative py-20 md:py-28 bg-[#f8f9fd] overflow-hidden">

                {/* Grid Background */}
                <div className="absolute inset-0 opacity-[0.3]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4">

                    <div className="
                        relative overflow-hidden
                        rounded-3xl
                        border border-white/30
                        bg-white/80 backdrop-blur-xl
                        shadow-2xl
                    ">

                        <div className="relative p-8 md:p-14">

                            {/* HEADER */}
                            <div className="mb-14 pb-10 border-b border-gray-200">

                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Terms of Service
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6 text-gray-600">

                                    <div className="space-y-3">

                                        <p>
                                            <span className="font-semibold text-gray-900">
                                                Effective Date:
                                            </span>{" "}
                                            [Insert Date]
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

                            {/* CONTENT */}
                            <div className="max-w-none text-gray-600 leading-8">

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    1. Introduction
                                </h2>

                                <p className="mb-6">
                                    Welcome to Webingic.
                                </p>

                                <p className="mb-6">
                                    These Terms of Service govern your access to and use of
                                    our website, communications, proposals, quotations,
                                    invoices, project services, deliverables, and related
                                    business interactions with Webingic.
                                </p>

                                <p className="mb-6">
                                    Webingic provides professional digital services,
                                    including website development, mobile application
                                    development, e-commerce development, user interface and
                                    user experience design, branding, logo design, digital
                                    marketing support, website maintenance, technical
                                    support, consulting, and related technology services.
                                </p>

                                <p className="mb-6">
                                    By using our website, contacting us, requesting a
                                    quote, approving a proposal, paying an invoice, or
                                    using our services, you agree to these Terms of
                                    Service.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    2. Definitions
                                </h2>

                                <p className="mb-6">
                                    For these Terms:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">

                                    <li>
                                        <strong>“Webingic,” “we,” “us,” or “our”</strong>{" "}
                                        means Webingic.
                                    </li>

                                    <li>
                                        <strong>“Client,” “you,” or “your”</strong>{" "}
                                        means the person, company, business, organization,
                                        or representative using the website or services.
                                    </li>

                                    <li>
                                        <strong>“Website”</strong> means webingic.com and
                                        related pages operated by Webingic.
                                    </li>

                                    <li>
                                        <strong>“Services”</strong> means all services
                                        offered or provided by Webingic.
                                    </li>

                                    <li>
                                        <strong>“Project”</strong> means a specific
                                        engagement or assignment agreed between Webingic
                                        and the Client.
                                    </li>

                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    3. International Clients Only
                                </h2>

                                <p className="mb-6">
                                    Webingic provides services to international clients only.
                                </p>

                                <p className="mb-6">
                                    We do not solicit, target, or accept local Pakistan
                                    based clients through this website.
                                </p>

                                <p className="mb-6">
                                    If you are located in Pakistan, we may decline your
                                    inquiry, refuse service, cancel a request, or not
                                    respond.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    4. Business-to-Business Nature of Services
                                </h2>

                                <p className="mb-6">
                                    Our services are primarily intended for business,
                                    startup, agency, commercial, and entrepreneurial use.
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">

                                    <li>
                                        You are acting for business or professional purposes.
                                    </li>

                                    <li>
                                        You have authority to represent the business or
                                        project.
                                    </li>

                                    <li>
                                        You are not using the services for unlawful purposes.
                                    </li>

                                    <li>
                                        You are at least 18 years old.
                                    </li>

                                    <li>
                                        You have authority to enter into a binding agreement.
                                    </li>

                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    5. Services Offered
                                </h2>

                                <p className="mb-6">
                                    Webingic may provide services including:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">

                                    <li>Website development</li>
                                    <li>Mobile application development</li>
                                    <li>E-commerce development</li>
                                    <li>UI/UX design</li>
                                    <li>Logo and branding design</li>
                                    <li>Digital marketing support</li>
                                    <li>Website maintenance</li>
                                    <li>Technical consulting</li>
                                    <li>Third-party integrations</li>
                                    <li>Automation support</li>

                                </ol>


                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    6. No Guaranteed Availability of Services
                                </h2>

                                <p className="mb-6">
                                    We may modify, suspend, discontinue, or refuse any service at any time.
                                </p>

                                <p className="mb-6">
                                    We are not required to accept every project, inquiry, or client.
                                </p>

                                <p className="mb-6">
                                    We may refuse work involving:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Illegal activity.</li>
                                    <li>Fraud.</li>
                                    <li>Deceptive business models.</li>
                                    <li>Harmful content.</li>
                                    <li>Adult content.</li>
                                    <li>Hate, harassment, or discrimination.</li>
                                    <li>Malware, spyware, phishing, or cyber abuse.</li>
                                    <li>Infringing content.</li>
                                    <li>Gambling, weapons, controlled substances, or restricted industries.</li>
                                    <li>Misleading financial claims.</li>
                                    <li>Projects violating third-party platform rules.</li>
                                    <li>Any project we consider risky or unsuitable.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    7. Quotes, Estimates, and Proposals
                                </h2>

                                <p className="mb-6">
                                    Any quote, estimate, or proposal provided by Webingic is based on the
                                    information available at the time.
                                </p>

                                <p className="mb-6">
                                    Unless expressly stated otherwise:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Quotes are not binding until accepted by Webingic in writing.</li>
                                    <li>Estimates are not fixed prices.</li>
                                    <li>Pricing may change if project requirements change.</li>
                                    <li>Timelines may change due to scope or feedback changes.</li>
                                    <li>A proposal may expire after the stated time.</li>
                                    <li>Proposals may be revised or withdrawn before acceptance.</li>
                                </ol>

                                <p className="mb-6">
                                    We reserve the right to correct errors in pricing, scope,
                                    descriptions, timelines, or availability.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    8. Project Scope
                                </h2>

                                <p className="mb-6">
                                    The project scope is limited to the services and deliverables expressly
                                    agreed in writing.
                                </p>

                                <p className="mb-6">
                                    Anything not expressly included is excluded.
                                </p>

                                <p className="mb-6">
                                    Examples of excluded items unless specifically included:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Extra pages.</li>
                                    <li>Extra designs.</li>
                                    <li>Extra revisions.</li>
                                    <li>Copywriting.</li>
                                    <li>Premium images.</li>
                                    <li>Premium fonts.</li>
                                    <li>Paid plugins.</li>
                                    <li>Paid themes.</li>
                                    <li>Hosting fees.</li>
                                    <li>Domain fees.</li>
                                    <li>Advertising spend.</li>
                                    <li>Ongoing maintenance.</li>
                                    <li>Training.</li>
                                    <li>Complex integrations.</li>
                                    <li>Emergency support.</li>
                                </ol>

                                <p className="mb-6">
                                    Additional work may require additional fees.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    9. Change Requests
                                </h2>

                                <p className="mb-6">
                                    A change request is any request that adds, modifies, expands,
                                    or changes the agreed project scope.
                                </p>

                                <p className="mb-6">
                                    Change requests may include:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>New features.</li>
                                    <li>New pages.</li>
                                    <li>Design changes beyond agreed revisions.</li>
                                    <li>New integrations.</li>
                                    <li>New content.</li>
                                    <li>Reworking approved work.</li>
                                    <li>Changes caused by incomplete instructions.</li>
                                    <li>Changes caused by third-party limitations.</li>
                                    <li>Changes after project approval.</li>
                                    <li>Additional support or maintenance.</li>
                                </ol>

                                <p className="mb-6">
                                    We may accept or reject change requests at our discretion.
                                </p>

                                <p className="mb-6">
                                    If accepted, change requests may result in additional fees,
                                    revised timelines, milestones, deliverables, or deposits.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    10. Client Responsibilities
                                </h2>

                                <p className="mb-6">
                                    You agree to:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Provide accurate project requirements.</li>
                                    <li>Provide complete instructions.</li>
                                    <li>Provide content, files, access, and approvals on time.</li>
                                    <li>Respond to questions promptly.</li>
                                    <li>Review work carefully.</li>
                                    <li>Provide consolidated feedback.</li>
                                    <li>Pay invoices on time.</li>
                                    <li>Maintain backups of your own systems.</li>
                                    <li>Ensure you have rights to all content provided.</li>
                                    <li>Use the services lawfully.</li>
                                    <li>Cooperate reasonably with Webingic.</li>
                                    <li>Notify us of issues promptly.</li>
                                    <li>Review deliverables before approval.</li>
                                    <li>Obtain any legal or compliance advice needed.</li>
                                    <li>Keep third-party accounts secure.</li>
                                    <li>Revoke access after project completion where appropriate.</li>
                                </ol>

                                <p className="mb-6">
                                    Delays caused by the Client may delay the project and
                                    may result in additional fees.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    11. Client Content
                                </h2>

                                <p className="mb-6">
                                    You are solely responsible for all Client Content.
                                </p>

                                <p className="mb-6">
                                    You represent and warrant that:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>You own or have rights to all Client Content.</li>
                                    <li>Client Content does not infringe third-party rights.</li>
                                    <li>Client Content is accurate and lawful.</li>
                                    <li>Client Content does not contain harmful code.</li>
                                    <li>Client Content complies with applicable laws.</li>
                                    <li>You have obtained all necessary permissions and licenses.</li>
                                </ol>

                                <p className="mb-6">
                                    We are not responsible for verifying ownership,
                                    legality, accuracy, or compliance of Client Content.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    12. Project Materials and Access
                                </h2>

                                <p className="mb-6">
                                    You may need to provide access to domains, hosting,
                                    content management systems, analytics accounts,
                                    payment gateways, repositories, and third-party tools.
                                </p>

                                <p className="mb-6">
                                    You agree that:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>You are authorized to provide such access.</li>
                                    <li>You will provide access safely and lawfully.</li>
                                    <li>You remain responsible for your accounts.</li>
                                    <li>You should provide limited access where possible.</li>
                                    <li>You should not share unnecessary passwords.</li>
                                    <li>You should revoke access after completion.</li>
                                    <li>You are responsible for third-party fees.</li>
                                    <li>You are responsible for third-party account restrictions.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic is not liable for issues caused by third-party
                                    platforms, expired subscriptions, unpaid fees,
                                    outages, or policy changes.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    13. Payments
                                </h2>

                                <p className="mb-6">
                                    Payment terms will be stated in the applicable proposal,
                                    invoice, or written communication.
                                </p>

                                <p className="mb-6">
                                    Unless otherwise agreed in writing:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Payments must be made in advance or by milestones.</li>
                                    <li>Work may not begin until payment is received.</li>
                                    <li>Webingic may pause work if payment is late.</li>
                                    <li>Deliverables may be withheld until payment is complete.</li>
                                    <li>All fees exclude third-party charges unless stated otherwise.</li>
                                    <li>Clients are responsible for processor and conversion fees.</li>
                                    <li>Payments must use approved methods only.</li>
                                    <li>We may refuse risky payment methods.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    14. Deposits and Advance Payments
                                </h2>

                                <p className="mb-6">
                                    Deposits and advance payments reserve project time,
                                    onboarding, planning, and initial work.
                                </p>

                                <p className="mb-6">
                                    Unless otherwise agreed in writing:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Deposits are non-refundable.</li>
                                    <li>Advance payments are non-refundable once work starts.</li>
                                    <li>Completed milestone payments are non-refundable.</li>
                                    <li>Planning and consultation work is non-refundable.</li>
                                    <li>
                                        Webingic may retain amounts paid for work performed
                                        and reserved project time.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    15. Refund Policy
                                </h2>

                                <p className="mb-6">
                                    Because Webingic provides custom digital services,
                                    refunds are limited.
                                </p>

                                <p className="mb-6">
                                    Unless required by law or agreed in writing:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>No refund is available after work has started.</li>
                                    <li>No refund is available for completed work.</li>
                                    <li>No refund is available for approved milestones.</li>
                                    <li>No refund is available for delivered concepts.</li>
                                    <li>No refund is available for development work performed.</li>
                                    <li>No refund is available for delivered files.</li>
                                    <li>No refund is available for client-caused delays.</li>
                                    <li>No refund is available if the client changes their mind.</li>
                                    <li>No refund is available for missing client content or approvals.</li>
                                    <li>No refund is available for third-party platform issues.</li>
                                    <li>No refund is available for third-party costs.</li>
                                </ol>

                                <p className="mb-6">
                                    If Webingic provides a partial refund at its discretion,
                                    it does not create an obligation for future refunds.
                                </p>


                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    16. Chargebacks and Payment Disputes
                                </h2>

                                <p className="mb-6">
                                    You agree to contact Webingic first before initiating any
                                    chargeback, payment reversal, or dispute.
                                </p>

                                <p className="mb-6">
                                    If you initiate a chargeback for services already authorized,
                                    started, delivered, or partially delivered:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>We may suspend all work immediately.</li>
                                    <li>We may revoke licenses or access where legally permitted.</li>
                                    <li>We may withhold deliverables.</li>
                                    <li>We may recover chargeback and legal costs.</li>
                                    <li>We may provide records and evidence to payment processors.</li>
                                    <li>We may terminate the project.</li>
                                    <li>We may refuse future service.</li>
                                </ol>

                                <p className="mb-6">
                                    Chargeback abuse is considered a material breach of these Terms.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    17. Taxes and Fees
                                </h2>

                                <p className="mb-6">
                                    You are responsible for taxes, duties, withholding,
                                    bank charges, currency conversion fees, payment processor
                                    fees, and similar charges applicable to your purchase
                                    or use of our services.
                                </p>

                                <p className="mb-6">
                                    Unless expressly stated otherwise, prices do not include
                                    taxes, domain fees, hosting fees, plugin fees, app store fees,
                                    software subscriptions, or advertising spend.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    18. Timelines
                                </h2>

                                <p className="mb-6">
                                    Any timeline, launch date, or delivery date is an estimate
                                    unless expressly stated as guaranteed in writing.
                                </p>

                                <p className="mb-6">
                                    Timelines may change due to:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Client delays.</li>
                                    <li>Late payments.</li>
                                    <li>Late content.</li>
                                    <li>Late feedback.</li>
                                    <li>Scope changes.</li>
                                    <li>Revision requests.</li>
                                    <li>Third-party platform delays.</li>
                                    <li>Technical issues.</li>
                                    <li>Hosting or domain issues.</li>
                                    <li>App store review delays.</li>
                                    <li>Payment gateway approval delays.</li>
                                    <li>Force majeure or emergencies.</li>
                                    <li>Changing project requirements.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic is not liable for delays caused by clients
                                    or third parties.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    19. Revisions
                                </h2>

                                <p className="mb-6">
                                    The number of included revisions, if any,
                                    will be stated in the proposal or written agreement.
                                </p>

                                <p className="mb-6">
                                    Unless otherwise agreed:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Revisions must be requested within a reasonable time.</li>
                                    <li>Revisions must remain within the original scope.</li>
                                    <li>Revision requests must be clear and consolidated.</li>
                                    <li>Revisions do not include complete redesigns.</li>
                                    <li>Revisions do not include new features.</li>
                                    <li>Revisions do not include changes to approved work.</li>
                                    <li>Unused revisions have no cash value.</li>
                                    <li>Additional revisions may require additional fees.</li>
                                </ol>

                                <p className="mb-6">
                                    If no revision count is stated, revisions are provided
                                    at Webingic’s discretion.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    20. Client Delays and Project Inactivity
                                </h2>

                                <p className="mb-6">
                                    If the Client does not provide content, approvals,
                                    access, or payments, the project may be delayed,
                                    paused, or closed.
                                </p>

                                <p className="mb-6">
                                    If a project remains inactive for more than 15 days,
                                    Webingic may pause the project.
                                </p>

                                <p className="mb-6">
                                    If inactivity continues beyond 30 days,
                                    the project may be treated as abandoned.
                                </p>

                                <p className="mb-6">
                                    For abandoned projects:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Amounts paid are non-refundable.</li>
                                    <li>Webingic may close the project.</li>
                                    <li>The project may be removed from active scheduling.</li>
                                    <li>Reactivation fees may apply.</li>
                                    <li>Pricing and timelines may be revised.</li>
                                    <li>Previous scheduling priority is not guaranteed.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    21. Approval of Work
                                </h2>

                                <p className="mb-6">
                                    When you approve a milestone, design, feature,
                                    draft, website, or deliverable, you confirm that
                                    you have reviewed and accepted it.
                                </p>

                                <p className="mb-6">
                                    Approval may occur through:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Written confirmation.</li>
                                    <li>Email approval.</li>
                                    <li>Milestone payment.</li>
                                    <li>Requesting the next stage.</li>
                                    <li>Using the deliverable.</li>
                                    <li>Publishing or launching the work.</li>
                                    <li>Failure to object within a reasonable review period.</li>
                                </ol>

                                <p className="mb-6">
                                    Changes requested after approval may require additional fees.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    22. Delivery of Deliverables
                                </h2>

                                <p className="mb-6">
                                    Deliverables may be provided through:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Email.</li>
                                    <li>File-sharing platforms.</li>
                                    <li>Website deployment.</li>
                                    <li>Hosting accounts.</li>
                                    <li>Code repositories.</li>
                                    <li>Design platforms.</li>
                                    <li>Project management tools.</li>
                                    <li>Client dashboards.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic may withhold final files, credentials,
                                    source files, or transfers until all payments are completed.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    23. Ownership of Deliverables
                                </h2>

                                <p className="mb-6">
                                    Unless otherwise agreed in writing and subject to full payment:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>
                                        The Client owns final custom deliverables after full payment.
                                    </li>

                                    <li>
                                        Webingic retains ownership of internal tools,
                                        frameworks, templates, reusable systems,
                                        methods, and pre-existing materials.
                                    </li>

                                    <li>
                                        Third-party materials remain subject to their own licenses.
                                    </li>

                                    <li>
                                        Drafts, rejected concepts, working files,
                                        research, and internal materials remain
                                        property of Webingic unless included explicitly.
                                    </li>

                                    <li>
                                        Ownership does not transfer until invoices
                                        are fully paid.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    24. Source Files
                                </h2>

                                <p className="mb-6">
                                    Source files are not included unless expressly stated
                                    in the proposal.
                                </p>

                                <p className="mb-6">
                                    Source files may include:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Design source files.</li>
                                    <li>Raw editable files.</li>
                                    <li>Development source code.</li>
                                    <li>Layered design files.</li>
                                    <li>Internal working files.</li>
                                    <li>Configuration files.</li>
                                    <li>Unused concepts.</li>
                                    <li>Internal documentation.</li>
                                </ol>

                                <p className="mb-6">
                                    Additional fees may apply if source files are requested
                                    outside the original scope.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    25. License Before Full Payment
                                </h2>

                                <p className="mb-6">
                                    Before full payment, all work provided by Webingic
                                    is for review purposes only.
                                </p>

                                <p className="mb-6">
                                    You may not copy, publish, launch, transfer,
                                    modify, or commercially use unpaid work
                                    without written permission.
                                </p>

                                <p className="mb-6">
                                    Unauthorized use of unpaid work may result in
                                    legal action, suspension, takedown requests,
                                    additional fees, or refusal of future service.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    26. Third-Party Materials
                                </h2>

                                <p className="mb-6">
                                    Projects may include third-party materials such as:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Plugins.</li>
                                    <li>Themes.</li>
                                    <li>Fonts.</li>
                                    <li>Images.</li>
                                    <li>Icons.</li>
                                    <li>Frameworks.</li>
                                    <li>Hosting services.</li>
                                    <li>Payment gateways.</li>
                                    <li>Analytics tools.</li>
                                    <li>APIs and integrations.</li>
                                    <li>Open-source components.</li>
                                    <li>AI tools and services.</li>
                                </ol>

                                <p className="mb-6">
                                    You are responsible for complying with third-party
                                    licenses, subscriptions, fees, and restrictions.
                                </p>

                                <p className="mb-6">
                                    Webingic is not responsible for outages,
                                    restrictions, licensing disputes, price increases,
                                    or discontinuation of third-party services.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    27. Open-Source Software
                                </h2>

                                <p className="mb-6">
                                    Projects may include open-source software governed
                                    by its own license terms.
                                </p>

                                <p className="mb-6">
                                    You are responsible for complying with applicable
                                    open-source licenses.
                                </p>

                                <p className="mb-6">
                                    Webingic does not provide legal advice regarding
                                    open-source compliance.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    28. Website Hosting, Domains, and Email
                                </h2>

                                <p className="mb-6">
                                    Unless expressly agreed, Webingic does not provide
                                    permanent hosting, domain registration,
                                    email hosting, or server administration.
                                </p>

                                <p className="mb-6">
                                    If we assist with setup:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>The third-party provider controls the service.</li>
                                    <li>You are responsible for provider fees.</li>
                                    <li>You are responsible for renewals.</li>
                                    <li>You are responsible for account ownership.</li>
                                    <li>You are responsible for backups unless agreed otherwise.</li>
                                    <li>You are responsible for compliance with provider terms.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic is not liable for downtime, data loss,
                                    account issues, or provider restrictions.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    29. Maintenance and Support
                                </h2>

                                <p className="mb-6">
                                    Maintenance and support are not included
                                    unless expressly agreed in writing.
                                </p>

                                <p className="mb-6">
                                    Maintenance may include:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Minor updates.</li>
                                    <li>Bug fixes.</li>
                                    <li>Content changes.</li>
                                    <li>Plugin updates.</li>
                                    <li>Theme updates.</li>
                                    <li>Backup monitoring.</li>
                                    <li>Security monitoring.</li>
                                    <li>Technical troubleshooting.</li>
                                </ol>

                                <p className="mb-6">
                                    Without a maintenance agreement,
                                    Webingic is not responsible for ongoing updates,
                                    monitoring, compatibility, uptime, or support.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    30. Bugs and Technical Issues
                                </h2>

                                <p className="mb-6">
                                    We make reasonable efforts to deliver
                                    professional and functional work.
                                </p>

                                <p className="mb-6">
                                    However, software, websites, applications,
                                    and digital systems may contain bugs,
                                    compatibility limitations, or unexpected behavior.
                                </p>

                                <p className="mb-6">
                                    Unless otherwise agreed:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>
                                        Bugs reported during the agreed review period
                                        may be fixed if they relate to the original scope.
                                    </li>

                                    <li>
                                        Issues caused by client changes are not included.
                                    </li>

                                    <li>
                                        Issues caused by third-party updates are not included.
                                    </li>

                                    <li>
                                        Issues caused by hosting, plugins, browsers,
                                        or external systems are not included.
                                    </li>

                                    <li>
                                        New feature requests are not bug fixes.
                                    </li>

                                    <li>
                                        Issues reported after the review period
                                        may require additional fees.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    31. Browser, Device, and Platform Compatibility
                                </h2>

                                <p className="mb-6">
                                    Unless expressly agreed, Webingic does not guarantee
                                    perfect appearance or performance on every browser,
                                    device, operating system, screen size, platform,
                                    or future software version.
                                </p>

                                <p className="mb-6">
                                    We may test on commonly used modern browsers
                                    and devices, but compatibility with outdated
                                    systems or future updates may require additional work.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    32. Search Engine Optimization
                                </h2>

                                <p className="mb-6">
                                    If Webingic provides SEO support,
                                    you understand that:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Search rankings cannot be guaranteed.</li>
                                    <li>Traffic cannot be guaranteed.</li>
                                    <li>Leads and sales cannot be guaranteed.</li>
                                    <li>Search engines may change algorithms.</li>
                                    <li>Competitors may affect results.</li>
                                    <li>Performance depends on many external factors.</li>
                                    <li>SEO results may take time.</li>
                                    <li>
                                        Webingic is not responsible for penalties caused
                                        by client actions, third parties, or prior history.
                                    </li>
                                </ol>

                                <p className="mb-6">
                                    SEO services are provided on a best-effort basis
                                    unless expressly guaranteed in writing.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    33. Digital Marketing and Advertising
                                </h2>

                                <p className="mb-6">
                                    If Webingic provides digital marketing,
                                    campaign management, or advertising support:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>
                                        We do not guarantee sales, leads, conversions,
                                        profits, traffic, or approvals.
                                    </li>

                                    <li>
                                        Advertising platforms may reject,
                                        suspend, or restrict accounts or ads.
                                    </li>

                                    <li>
                                        You are responsible for advertising spend.
                                    </li>

                                    <li>
                                        You are responsible for claims made in advertisements.
                                    </li>

                                    <li>
                                        You are responsible for compliance of products,
                                        services, offers, and landing pages.
                                    </li>

                                    <li>
                                        Results depend on market conditions,
                                        competition, budget, audience behavior,
                                        and external platform rules.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    34. E-Commerce Projects
                                </h2>

                                <p className="mb-6">
                                    If Webingic provides e-commerce services,
                                    you are responsible for:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Product legality.</li>
                                    <li>Product descriptions.</li>
                                    <li>Pricing accuracy.</li>
                                    <li>Taxes and duties.</li>
                                    <li>Shipping policies.</li>
                                    <li>Refund and return policies.</li>
                                    <li>Payment gateway approval.</li>
                                    <li>Customer support.</li>
                                    <li>Order fulfillment.</li>
                                    <li>Consumer protection compliance.</li>
                                    <li>Privacy policy compliance.</li>
                                    <li>Inventory management.</li>
                                    <li>Product images and rights.</li>
                                    <li>Platform fees and subscriptions.</li>
                                    <li>Chargebacks and disputes.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic is not responsible for legal compliance,
                                    customer disputes, payment holds,
                                    tax obligations, or product claims.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    35. App Development Projects
                                </h2>

                                <p className="mb-6">
                                    If Webingic provides mobile application development:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>App store approval is not guaranteed.</li>
                                    <li>App stores may reject or delay apps.</li>
                                    <li>Platform rules may change.</li>
                                    <li>Developer account fees are your responsibility.</li>
                                    <li>
                                        Third-party SDKs and APIs may change over time.
                                    </li>

                                    <li>
                                        Future operating system updates may require maintenance.
                                    </li>

                                    <li>
                                        Ongoing support requires a separate agreement
                                        unless expressly included.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    36. Legal, Regulatory, and Compliance Matters
                                </h2>

                                <p className="mb-6">
                                    Webingic does not provide legal, tax,
                                    accounting, financial, regulatory,
                                    or professional legal advice.
                                </p>

                                <p className="mb-6">
                                    You are responsible for ensuring that your:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Website complies with applicable laws.</li>
                                    <li>Applications comply with regulations.</li>
                                    <li>Privacy practices are lawful.</li>
                                    <li>Marketing practices are compliant.</li>
                                    <li>Policies and terms are legally reviewed.</li>
                                    <li>Products and services comply with regulations.</li>
                                </ol>

                                <p className="mb-6">
                                    Any templates or policy drafts provided by Webingic
                                    should be reviewed by your own legal advisor.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    37. Prohibited Uses
                                </h2>

                                <p className="mb-6">
                                    You may not use our website or services for:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Illegal activity.</li>
                                    <li>Fraud.</li>
                                    <li>Phishing.</li>
                                    <li>Malware or cyber abuse.</li>
                                    <li>Spam.</li>
                                    <li>Harassment or hate speech.</li>
                                    <li>Deceptive claims.</li>
                                    <li>Intellectual property infringement.</li>
                                    <li>Privacy violations.</li>
                                    <li>Unauthorized data collection.</li>
                                    <li>Fake documents or reviews.</li>
                                    <li>Counterfeit goods.</li>
                                    <li>Restricted or unlawful products.</li>
                                    <li>Adult exploitation.</li>
                                    <li>Violence or threats.</li>
                                    <li>Circumventing platform rules.</li>
                                </ol>

                                <p className="mb-6">
                                    We may suspend or terminate services
                                    for projects involving prohibited activity.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    38. Client Warranties
                                </h2>

                                <p className="mb-6">
                                    You represent and warrant that:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>You have authority to enter these Terms.</li>
                                    <li>Your business activities are lawful.</li>
                                    <li>Your instructions are lawful.</li>
                                    <li>Your content is lawful and accurate.</li>
                                    <li>
                                        You own or have rights to all materials provided.
                                    </li>

                                    <li>
                                        You will comply with third-party platform rules.
                                    </li>

                                    <li>
                                        You will not misuse our services or deliverables.
                                    </li>

                                    <li>
                                        You will pay all amounts due on time.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    39. Webingic Warranties Disclaimer
                                </h2>

                                <p className="mb-6">
                                    Webingic provides services on a professional,
                                    reasonable-efforts basis.
                                </p>

                                <p className="mb-6">
                                    To the maximum extent permitted by law,
                                    our services and deliverables are provided
                                    “as is” and “as available.”
                                </p>

                                <p className="mb-6">
                                    We disclaim warranties including:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Merchantability.</li>
                                    <li>Fitness for a particular purpose.</li>
                                    <li>Non-infringement.</li>
                                    <li>Error-free operation.</li>
                                    <li>Uninterrupted availability.</li>
                                    <li>Compatibility with all systems.</li>
                                    <li>Guaranteed results.</li>
                                    <li>Guaranteed profits or traffic.</li>
                                    <li>Guaranteed rankings or approvals.</li>
                                    <li>Guaranteed security.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    40. No Guarantee of Business Results
                                </h2>

                                <p className="mb-6">
                                    Webingic does not guarantee that any website,
                                    application, campaign, branding work,
                                    or digital service will produce specific results.
                                </p>

                                <p className="mb-6">
                                    We do not guarantee:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Sales.</li>
                                    <li>Revenue.</li>
                                    <li>Profit.</li>
                                    <li>Leads.</li>
                                    <li>Traffic.</li>
                                    <li>Search rankings.</li>
                                    <li>Advertising approvals.</li>
                                    <li>Payment gateway approvals.</li>
                                    <li>App approvals.</li>
                                    <li>Business growth.</li>
                                </ol>

                                <p className="mb-6">
                                    Business outcomes depend on many factors
                                    outside our control.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    41. Limitation of Liability
                                </h2>

                                <p className="mb-6">
                                    To the maximum extent permitted by law,
                                    Webingic will not be liable for:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Lost profits.</li>
                                    <li>Lost revenue.</li>
                                    <li>Lost business.</li>
                                    <li>Lost data.</li>
                                    <li>Lost goodwill.</li>
                                    <li>Business interruption.</li>
                                    <li>Website downtime.</li>
                                    <li>Platform suspension.</li>
                                    <li>Advertising account issues.</li>
                                    <li>App store rejection.</li>
                                    <li>Third-party service failures.</li>
                                    <li>Indirect or consequential damages.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic’s total liability for any claim
                                    will not exceed the amount actually paid
                                    for the specific project giving rise to the claim.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    42. Indemnification
                                </h2>

                                <p className="mb-6">
                                    You agree to defend, indemnify,
                                    and hold harmless Webingic,
                                    its owners, contractors, affiliates,
                                    and representatives from claims arising from:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Your use of our services.</li>
                                    <li>Your business activities.</li>
                                    <li>Your products or services.</li>
                                    <li>Your Client Content.</li>
                                    <li>Your instructions.</li>
                                    <li>Your breach of these Terms.</li>
                                    <li>Your violation of laws.</li>
                                    <li>Your violation of third-party rights.</li>
                                    <li>Your misuse of deliverables.</li>
                                    <li>Your payment disputes or chargebacks.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    43. Confidentiality
                                </h2>

                                <p className="mb-6">
                                    Webingic will take reasonable steps
                                    to keep confidential information private.
                                </p>

                                <p className="mb-6">
                                    However, we may disclose information:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>To contractors and service providers.</li>
                                    <li>To payment processors or financial institutions.</li>
                                    <li>To legal or professional advisors.</li>
                                    <li>To comply with law.</li>
                                    <li>To prevent fraud or abuse.</li>
                                    <li>With your consent.</li>
                                </ol>

                                <p className="mb-6">
                                    If you require additional confidentiality protections,
                                    a separate written NDA may be required.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    44. Portfolio Rights
                                </h2>

                                <p className="mb-6">
                                    Unless otherwise agreed in writing before the project begins,
                                    Webingic may display completed work in:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Portfolio websites.</li>
                                    <li>Social media.</li>
                                    <li>Case studies.</li>
                                    <li>Marketing materials.</li>
                                    <li>Presentations and proposals.</li>
                                </ol>

                                <p className="mb-6">
                                    Portfolio content may include:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Client name.</li>
                                    <li>Logo.</li>
                                    <li>Website screenshots.</li>
                                    <li>Public website links.</li>
                                    <li>General project descriptions.</li>
                                </ol>

                                <p className="mb-6">
                                    We will not intentionally disclose sensitive
                                    non-public information.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    45. Testimonials and Reviews
                                </h2>

                                <p className="mb-6">
                                    If you provide a testimonial, review,
                                    comment, or endorsement,
                                    you grant Webingic permission to use it
                                    for marketing and promotional purposes.
                                </p>

                                <p className="mb-6">
                                    Testimonials may be edited for clarity,
                                    formatting, grammar, or length,
                                    provided the meaning is not materially changed.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    46. Public Credit
                                </h2>

                                <p className="mb-6">
                                    Unless otherwise agreed in writing,
                                    Webingic may include a discreet credit link
                                    or text in the footer or source materials
                                    of projects we create.
                                </p>

                                <p className="mb-6">
                                    Examples may include:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>“Website by Webingic.”</li>
                                    <li>“Designed by Webingic.”</li>
                                    <li>“Developed by Webingic.”</li>
                                </ol>

                                <p className="mb-6">
                                    If you want removal of public credit,
                                    this must be agreed in writing and
                                    may require an additional fee.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    47. Non-Solicitation
                                </h2>

                                <p className="mb-6">
                                    During a project and for 12 months after completion,
                                    you agree not to knowingly solicit,
                                    hire, or directly contract with
                                    Webingic’s contractors, freelancers,
                                    employees, or suppliers introduced to you
                                    through Webingic without written permission.
                                </p>

                                <p className="mb-6">
                                    If this section is breached,
                                    Webingic may seek damages,
                                    injunctive relief, and recovery
                                    of losses to the maximum extent permitted by law.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    48. Independent Contractor Relationship
                                </h2>

                                <p className="mb-6">
                                    Webingic operates as an independent contractor.
                                </p>

                                <p className="mb-6">
                                    Nothing in these Terms creates:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>A partnership.</li>
                                    <li>A joint venture.</li>
                                    <li>An employment relationship.</li>
                                    <li>An agency relationship.</li>
                                    <li>A franchise relationship.</li>
                                    <li>A fiduciary relationship.</li>
                                </ol>

                                <p className="mb-6">
                                    Webingic retains discretion over
                                    how services are performed,
                                    subject to the agreed project scope.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    49. Force Majeure
                                </h2>

                                <p className="mb-6">
                                    Webingic is not liable for delays
                                    or failures caused by events
                                    beyond our reasonable control.
                                </p>

                                <p className="mb-6">
                                    Examples include:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Internet outages.</li>
                                    <li>Hosting outages.</li>
                                    <li>Power failures.</li>
                                    <li>Cyberattacks.</li>
                                    <li>War or terrorism.</li>
                                    <li>Civil unrest.</li>
                                    <li>Natural disasters.</li>
                                    <li>Pandemics.</li>
                                    <li>Government actions.</li>
                                    <li>Labor disputes.</li>
                                    <li>Banking or payment processor issues.</li>
                                    <li>Third-party platform failures.</li>
                                    <li>Illness or emergencies.</li>
                                    <li>Supplier failures.</li>
                                    <li>Changes in law or platform policy.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    50. Suspension or Termination
                                </h2>

                                <p className="mb-6">
                                    Webingic may suspend or terminate services immediately if:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>You fail to pay on time.</li>
                                    <li>You breach these Terms.</li>
                                    <li>You provide false information.</li>
                                    <li>You become abusive or unreasonable.</li>
                                    <li>You request unlawful work.</li>
                                    <li>You misuse our work or services.</li>
                                    <li>You initiate improper chargebacks.</li>
                                    <li>
                                        You fail to provide required content,
                                        approvals, or access.
                                    </li>

                                    <li>
                                        Continuing the project creates legal,
                                        technical, financial, or reputational risk.
                                    </li>

                                    <li>
                                        We determine the relationship
                                        is no longer workable.
                                    </li>
                                </ol>

                                <p className="mb-6">
                                    Upon termination:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>You must pay all outstanding amounts.</li>
                                    <li>Webingic may stop work immediately.</li>
                                    <li>Webingic may withhold unpaid deliverables.</li>
                                    <li>Licenses to unpaid work terminate.</li>
                                    <li>
                                        Certain sections of these Terms
                                        will continue to survive termination.
                                    </li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    51. Survival
                                </h2>

                                <p className="mb-6">
                                    The following sections survive completion,
                                    cancellation, expiration, or termination
                                    of any project:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Payments.</li>
                                    <li>Refunds.</li>
                                    <li>Chargebacks.</li>
                                    <li>Ownership rights.</li>
                                    <li>Intellectual property rights.</li>
                                    <li>Confidentiality obligations.</li>
                                    <li>Portfolio rights.</li>
                                    <li>Warranty disclaimers.</li>
                                    <li>Limitation of liability.</li>
                                    <li>Indemnification obligations.</li>
                                    <li>Dispute resolution provisions.</li>
                                    <li>Any provisions intended to survive.</li>
                                </ol>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    52. Disputes
                                </h2>

                                <p className="mb-6">
                                    If a dispute arises,
                                    you agree to contact Webingic first
                                    and attempt to resolve the matter
                                    in good faith before:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Initiating a chargeback.</li>
                                    <li>Filing legal action.</li>
                                    <li>Posting public complaints.</li>
                                    <li>Submitting platform complaints.</li>
                                    <li>Escalating to third parties.</li>
                                </ol>

                                <p className="mb-6">
                                    You agree to provide a clear written description
                                    of the issue and allow a reasonable opportunity
                                    for response and resolution.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    53. Governing Law
                                </h2>

                                <p className="mb-6">
                                    Unless otherwise required by applicable law
                                    or agreed in writing,
                                    these Terms are governed by
                                    the laws applicable in Pakistan,
                                    without regard to conflict of law principles.
                                </p>

                                <p className="mb-6">
                                    Because Webingic serves international clients,
                                    certain mandatory laws of your location
                                    may also apply in limited circumstances.
                                </p>

                                <p className="mb-6">
                                    Nothing in these Terms excludes rights
                                    that cannot legally be excluded.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    54. Jurisdiction
                                </h2>

                                <p className="mb-6">
                                    Unless otherwise required by applicable law
                                    or agreed in writing,
                                    disputes relating to Webingic,
                                    our website, services, or these Terms
                                    will be handled in the competent courts
                                    having jurisdiction over Webingic’s
                                    business location.
                                </p>

                                <p className="mb-6">
                                    You agree not to bring claims
                                    in an unrelated or inconvenient forum
                                    where such restriction is legally permitted.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    55. Informal Resolution First
                                </h2>

                                <p className="mb-6">
                                    Before filing any legal claim,
                                    both parties agree to attempt
                                    informal resolution through
                                    written communication first.
                                </p>

                                <p className="mb-6">
                                    The complaining party should provide:
                                </p>

                                <ol className="list-decimal pl-6 space-y-3 mb-8">
                                    <li>Name.</li>
                                    <li>Contact information.</li>
                                    <li>Project or invoice reference.</li>
                                    <li>Description of the issue.</li>
                                    <li>Requested resolution.</li>
                                    <li>Supporting evidence if applicable.</li>
                                </ol>

                                <p className="mb-6">
                                    The receiving party will be given
                                    a reasonable opportunity to review
                                    and respond to the matter.
                                </p>


                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    56. No Class Actions
                                </h2>

                                <p className="mb-6">
                                    To the maximum extent permitted by law,
                                    any disputes must be brought individually
                                    and not as a class, collective, consolidated,
                                    or representative action.
                                </p>

                                <p className="mb-6">
                                    You agree that claims will be resolved
                                    on an individual basis only.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    57. Assignment
                                </h2>

                                <p className="mb-6">
                                    You may not assign or transfer your rights
                                    or obligations under these Terms
                                    without prior written permission from Webingic.
                                </p>

                                <p className="mb-6">
                                    Webingic may assign or transfer its rights
                                    and obligations in connection with
                                    business restructuring, merger, acquisition,
                                    sale of assets, or similar transactions.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    58. Entire Agreement
                                </h2>

                                <p className="mb-6">
                                    These Terms, together with any proposal,
                                    invoice, statement of work, Privacy Policy,
                                    and written project communication,
                                    form the entire agreement between you and Webingic.
                                </p>

                                <p className="mb-6">
                                    If there is any conflict between these Terms
                                    and a signed written agreement,
                                    the signed agreement will prevail
                                    for that specific conflict only.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    59. Severability
                                </h2>

                                <p className="mb-6">
                                    If any provision of these Terms is found
                                    to be invalid, illegal, or unenforceable,
                                    the remaining provisions will continue in full force.
                                </p>

                                <p className="mb-6">
                                    The invalid portion will be interpreted
                                    in a way that best reflects its original intent
                                    while remaining enforceable.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    60. No Waiver
                                </h2>

                                <p className="mb-6">
                                    If Webingic does not enforce any right or provision
                                    immediately, it does not mean that the right is waived.
                                </p>

                                <p className="mb-6">
                                    Any waiver must be in writing and clearly confirmed
                                    by Webingic to be considered valid.
                                </p>

                                {/* SECTION */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-5">
                                    61. Updates to These Terms
                                </h2>

                                <p className="mb-6">
                                    We may update or modify these Terms from time to time.
                                </p>

                                <p className="mb-6">
                                    The updated version will be posted on our website
                                    with a revised effective date.
                                </p>

                                <p className="mb-6">
                                    Continued use of our website or services after updates
                                    means you accept the revised Terms.
                                </p>

                                <p className="mb-6">
                                    For ongoing projects, the version active at the time
                                    of agreement may apply unless updates are required
                                    for legal, security, or operational reasons.
                                </p>


                                {/* CONTACT */}
                                <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-5">
                                    62. Contact Information
                                </h2>

                                <p className="mb-6">
                                    For questions about these Terms, contact us at:
                                </p>

                                <div className="
                                    mt-8 rounded-3xl
                                    bg-gradient-to-br from-[#4148e6] to-[#1e293b]
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