"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/utils";

const SERVICES = ["IT Support", "Software Development", "Network Infrastructure", "Hardware Supply", "Office Furniture", "Home Interiors", "Other"];

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: `New enquiry from ${form.name}` }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
        setErrMsg(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please try again.");
    }
  };

  return (
    <section className="section-padding bg-[#f9f9f9]">
      <div className="container-ns grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* ── Form ── */}
        <div className="lg:col-span-7 bg-[#ffffff] rounded-xl p-8 lg:p-10 shadow-[0px_20py_40px_rgba(26,28,28,0.06)]">
          {status === "success" ? (
            <div className="py-16 text-center">
              <span className="material-symbols-outlined text-5xl text-[#845400] mb-4 block">check_circle</span>
              <h3 className="headline-sm text-[#1a1c1c] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Enquiry Received!</h3>
              <p className="text-[#5f5e5e] text-sm">We&apos;ll be in touch within one business day.</p>
              <button onClick={() => setStatus("idle")} className="btn-ghost mt-6 text-sm">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="label-md text-[#524535] mb-1.5 block">Name *</label>
                  <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className="input-ns" />
                </div>
                <div>
                  <label className="label-md text-[#524535] mb-1.5 block">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className="input-ns" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="label-md text-[#524535] mb-1.5 block">Company</label>
                  <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="NexSpace GmbH" className="input-ns" />
                </div>
                <div>
                  <label className="label-md text-[#524535] mb-1.5 block">Service</label>
                  <select name="service" value={form.service} onChange={handleChange} className="input-ns">
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="label-md text-[#524535] mb-1.5 block">Message *</label>
                <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project…" className="input-ns resize-none" />
              </div>
              {errMsg && (
                <p className="text-[#ba1a1a] text-sm bg-[#ffdad6] rounded-lg px-4 py-3">{errMsg}</p>
              )}
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── Office info ── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Germany */}
          <div className="bg-[#ffffff] p-7 rounded-xl shadow-[0px_20px_40px_rgba(26,28,28,0.06)]">
            <div className="h-40 rounded-lg bg-gradient-to-br from-[#e8e8e8] to-[#d6c3b0] mb-5 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#845400]/40">apartment</span>
            </div>
            <p className="label-md text-[#845400] mb-1">Germany Office 🇩🇪</p>
            <p className="text-sm text-[#1a1c1c] font-medium mb-3">{SITE_CONFIG.offices.germany.address}</p>
            <a href={`tel:${SITE_CONFIG.offices.germany.phone}`} className="text-sm text-[#5f5e5e] flex items-center gap-2 hover:text-[#845400] transition-colors">
              <span className="material-symbols-outlined text-base">phone</span>
              {SITE_CONFIG.offices.germany.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.offices.germany.email}`} className="text-sm text-[#5f5e5e] flex items-center gap-2 hover:text-[#845400] transition-colors mt-1.5">
              <span className="material-symbols-outlined text-base">mail</span>
              {SITE_CONFIG.offices.germany.email}
            </a>
          </div>

          {/* Pakistan */}
          <div className="bg-[#ffffff] p-7 rounded-xl shadow-[0px_20px_40px_rgba(26,28,28,0.06)]">
            <div className="h-40 rounded-lg bg-gradient-to-br from-[#e8e8e8] to-[#d6c3b0] mb-5 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#845400]/40">apartment</span>
            </div>
            <p className="label-md text-[#845400] mb-1">Pakistan Office 🇵🇰</p>
            <p className="text-sm text-[#1a1c1c] font-medium mb-3">{SITE_CONFIG.offices.pakistan.address}</p>
            <a href={`tel:${SITE_CONFIG.offices.pakistan.phone}`} className="text-sm text-[#5f5e5e] flex items-center gap-2 hover:text-[#845400] transition-colors">
              <span className="material-symbols-outlined text-base">phone</span>
              {SITE_CONFIG.offices.pakistan.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.offices.pakistan.email}`} className="text-sm text-[#5f5e5e] flex items-center gap-2 hover:text-[#845400] transition-colors mt-1.5">
              <span className="material-symbols-outlined text-base">mail</span>
              {SITE_CONFIG.offices.pakistan.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
