"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const reasonParam = searchParams.get("reason") || "";
  const classParam = searchParams.get("class") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    reason: "Speaking invitation",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (reasonParam) {
      if (reasonParam.toLowerCase().includes("speaking")) {
        setFormData((prev) => ({ ...prev, reason: "Speaking invitation" }));
      } else if (reasonParam.toLowerCase().includes("mentorship")) {
        setFormData((prev) => ({
          ...prev,
          reason: "Mentorship Masterclass",
          message: classParam ? `Inquiry regarding registration for: ${classParam}` : prev.message,
        }));
      } else if (reasonParam.toLowerCase().includes("accreditation")) {
        setFormData((prev) => ({ ...prev, reason: "Accreditation / External Examination" }));
      } else if (reasonParam.toLowerCase().includes("collaboration")) {
        setFormData((prev) => ({ ...prev, reason: "Academic Collaboration" }));
      }
    }
  }, [reasonParam, classParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate reliable dispatch (can easily connect to Formspree / Resend / custom API)
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="rounded-3xl bg-[#111827] border border-white/10 p-6 sm:p-10">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Message Sent Successfully
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your inquiry has been received by Prof. Aderibigbe's office and will be attended to promptly.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                organisation: "",
                reason: "Speaking invitation",
                message: "",
              });
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">
                Your Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Jane Okonkwo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. jane@institution.edu.ng"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">
                Organisation / Institution
              </label>
              <input
                type="text"
                placeholder="e.g. University / Media House / Foundation"
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300">
                Inquiry Type <span className="text-blue-400">*</span>
              </label>
              <select
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Speaking invitation">Speaking Invitation / Keynote</option>
                <option value="Academic Collaboration">Academic Research Collaboration</option>
                <option value="Accreditation / External Examination">Accreditation / External Examination</option>
                <option value="Mentorship Masterclass">Mentorship Masterclass Inquiry</option>
                <option value="Media Interview / Commentary">Media Interview / Commentary</option>
                <option value="General Inquiry">General Academic Inquiry</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300">
              Message & Proposed Details <span className="text-blue-400">*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder="Please describe the theme, event date, objectives, or nature of your request..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors disabled:opacity-50 shadow-lg shadow-blue-500/25"
          >
            {status === "submitting" ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Official Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
