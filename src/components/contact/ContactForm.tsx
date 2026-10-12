"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";

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

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="border border-[#20232E] bg-[#14161E] p-6 sm:p-8">
      {status === "success" ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#1F2433] text-[#EDEFEF] flex items-center justify-center mx-auto border border-[#2F364C]">
            <CheckCircle2 className="w-6 h-6 text-[#9AA1B2]" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#EDEFEF]">
            Message Received
          </h3>
          <p className="text-xs sm:text-sm text-[#8A92A6] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your inquiry has been logged with Prof. Aderibigbe's office and will be acknowledged promptly.
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
            className="mt-4 px-4 py-2 rounded-sm bg-[#1A1D27] hover:bg-[#202432] text-xs font-mono text-[#EDEFEF] transition-colors border border-[#262A38]"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="font-mono text-xs text-[#9AA1B2] block">
                Full Name <span className="text-[#8A90A2]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Jane Okonkwo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs sm:text-sm text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none focus:border-[#383E54] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs text-[#9AA1B2] block">
                Email Address <span className="text-[#8A90A2]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. jane@institution.edu.ng"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs sm:text-sm text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none focus:border-[#383E54] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="font-mono text-xs text-[#9AA1B2] block">
                Organisation / Institution
              </label>
              <input
                type="text"
                placeholder="e.g. University / Media House / Foundation"
                value={formData.organisation}
                onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs sm:text-sm text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none focus:border-[#383E54] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs text-[#9AA1B2] block">
                Inquiry Type <span className="text-[#8A90A2]">*</span>
              </label>
              <select
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs sm:text-sm text-[#EDEFEF] font-mono focus:outline-none focus:border-[#383E54] transition-colors"
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

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-[#9AA1B2] block">
              Message & Proposed Details <span className="text-[#8A90A2]">*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder="Please describe the theme, event dates, objectives, or nature of your request..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-sm bg-[#0D0E12] border border-[#20232E] text-xs sm:text-sm text-[#EDEFEF] placeholder-[#5A6072] font-mono focus:outline-none focus:border-[#383E54] transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#1F2433] hover:bg-[#282F44] text-[#EDEFEF] font-mono text-xs border border-[#2F364C] transition-colors disabled:opacity-50"
          >
            {status === "submitting" ? (
              <span>Sending Inquiry...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-[#8A90A2]" />
                <span>Submit Official Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
