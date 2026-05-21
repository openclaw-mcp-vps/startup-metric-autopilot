export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Startup Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-update investor dashboards{" "}
          <span className="text-[#58a6ff]">from your tools</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe, Google Analytics, and your CRM once. Startup Metric Autopilot keeps your investor dashboards current with real-time metrics and growth charts — no manual updates ever.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $49/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["Stripe", "Revenue & MRR"],
            ["Analytics", "Traffic & CAC"],
            ["CRM", "Pipeline & Churn"]
          ].map(([tool, metric]) => (
            <div key={tool} className="rounded-xl bg-[#161b22] border border-[#30363d] p-4">
              <div className="text-[#58a6ff] font-bold text-sm mb-1">{tool}</div>
              <div className="text-[#8b949e] text-xs">{metric}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Stripe, GA4 & CRM integrations",
              "Real-time investor dashboard",
              "Webhook & scheduled sync",
              "Shareable dashboard links",
              "Email digest for investors"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No credit card required for trial.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which tools can I connect?",
              "Currently Stripe (revenue, MRR, churn), Google Analytics 4 (traffic, CAC), and popular CRMs like HubSpot and Pipedrive. More integrations are added regularly."
            ],
            [
              "How often are metrics updated?",
              "Metrics sync in real-time via webhooks where supported, and on a scheduled 15-minute polling cycle for APIs that don't offer webhooks."
            ],
            [
              "Can I share the dashboard with investors?",
              "Yes. Each dashboard gets a private shareable link you can send to investors. You control access and can revoke links at any time."
            ]
          ].map(([q, a]) => (
            <div key={q} className="rounded-xl bg-[#161b22] border border-[#30363d] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} Startup Metric Autopilot. All rights reserved.
      </footer>
    </main>
  );
}
