"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { TeamDetail } from "@/types";
import { REGISTRATION_API_URL, REGISTRATION_FORM_EVENTS_API_URL } from "@/data/constants";
import { getOrCreateVisitorId } from "@/lib/visitorTracking";

export function HeroQuickForm({
  open,
  onOpen,
  onClose,
  showTrigger = true,
}: {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  showTrigger?: boolean;
}) {
  const EMPTY_TEAM_DETAIL: TeamDetail = {
    participantOneName: "",
    participantOneContact: "",
    participantOneEmail: "",
    participantTwoName: "",
    participantTwoContact: "",
    participantTwoEmail: "",
  };
  const isControlled = typeof open === "boolean";
  const [internalOpen, setInternalOpen] = useState(false);
  const [shouldRenderModal, setShouldRenderModal] = useState(isControlled ? Boolean(open) : false);
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [step, setStep] = useState(1);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotError, setScreenshotError] = useState("");
  const [showQrModal, setShowQrModal] = useState(false);
  const trackingSessionIdRef = useRef<string | null>(null);
  const trackedEventsRef = useRef<Set<string>>(new Set());
  const hasSubmittedRef = useRef(false);
  const [formData, setFormData] = useState({
    college: "",
    state: "",
    district: "",
    teamCount: "1",
    phone: "",
    acknowledge: false,
    teamDetails: [{ ...EMPTY_TEAM_DETAIL }],
  });
  const isOpen = isControlled ? open : internalOpen;

  const openForm = React.useCallback(() => {
    if (isControlled) {
      onOpen?.();
      return;
    }
    setInternalOpen(true);
  }, [isControlled, onOpen]);

  const closeForm = React.useCallback(() => {
    if (isControlled) {
      onClose?.();
      return;
    }
    setInternalOpen(false);
  }, [isControlled, onClose]);

  const teamCountNumber = Number(formData.teamCount) || 1;
  const isLastTeam = currentTeamIndex === teamCountNumber - 1;

  function createTrackingSessionId() {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
      return crypto.randomUUID();
    }

    return `form-${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
  }

  function trackFormEvent(
    eventName: string,
    stepNumber: number | null,
    meta?: Record<string, unknown>,
    options?: { once?: boolean }
  ) {
    if (typeof window === "undefined") {
      return;
    }

    const anonymousId = getOrCreateVisitorId();
    if (!anonymousId) {
      return;
    }

    const onceKey = options?.once ? `${trackingSessionIdRef.current}:${eventName}` : null;
    if (onceKey && trackedEventsRef.current.has(onceKey)) {
      return;
    }

    if (onceKey) {
      trackedEventsRef.current.add(onceKey);
    }

    void fetch(REGISTRATION_FORM_EVENTS_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        anonymous_id: anonymousId,
        session_id: trackingSessionIdRef.current,
        event_name: eventName,
        step: stepNumber,
        path: window.location.pathname + window.location.search,
        meta,
      }),
      keepalive: true,
    }).catch(() => {
      if (onceKey) {
        trackedEventsRef.current.delete(onceKey);
      }
    });
  }

  function clearErrors(keys: string[]) {
    setErrors((current) => {
      const next = { ...current };
      keys.forEach((key) => delete next[key]);
      return next;
    });
  }

  function validateStepOne() {
    const nextErrors: Record<string, string> = {};
    if (!formData.teamCount.trim()) nextErrors.teamCount = "Number of teams is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStepThree() {
    const nextErrors: Record<string, string> = {};
    const team = formData.teamDetails[currentTeamIndex] ?? EMPTY_TEAM_DETAIL;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!team.participantOneName.trim()) nextErrors[`participantOneName-${currentTeamIndex}`] = "Person 1 name is required.";
    if (!team.participantOneContact.trim()) {
      nextErrors[`participantOneContact-${currentTeamIndex}`] = "Person 1 contact number is required.";
    } else if (team.participantOneContact.replace(/\D/g, "").length > 12) {
      nextErrors[`participantOneContact-${currentTeamIndex}`] = "Contact number cannot exceed 12 digits.";
    }
    if (!team.participantOneEmail?.trim()) {
      nextErrors[`participantOneEmail-${currentTeamIndex}`] = "Person 1 email is required.";
    } else if (!emailRegex.test(team.participantOneEmail.trim())) {
      nextErrors[`participantOneEmail-${currentTeamIndex}`] = "Enter a valid email address.";
    }

    if (!team.participantTwoName.trim()) nextErrors[`participantTwoName-${currentTeamIndex}`] = "Person 2 name is required.";
    if (!team.participantTwoContact.trim()) {
      nextErrors[`participantTwoContact-${currentTeamIndex}`] = "Person 2 contact number is required.";
    } else if (team.participantTwoContact.replace(/\D/g, "").length > 12) {
      nextErrors[`participantTwoContact-${currentTeamIndex}`] = "Contact number cannot exceed 12 digits.";
    }
    if (!team.participantTwoEmail?.trim()) {
      nextErrors[`participantTwoEmail-${currentTeamIndex}`] = "Person 2 email is required.";
    } else if (!emailRegex.test(team.participantTwoEmail.trim())) {
      nextErrors[`participantTwoEmail-${currentTeamIndex}`] = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function validateStepFour() {
    const nextErrors: Record<string, string> = {};

    if (!formData.college.trim()) nextErrors.college = "College / Institution Name is required.";
    if (!formData.state.trim()) nextErrors.state = "State is required.";
    if (!formData.district.trim()) nextErrors.district = "District is required.";
    if (!formData.phone.trim()) {
      nextErrors.phone = "Institution contact number is required.";
    } else if (formData.phone.replace(/\D/g, "").length > 12) {
      nextErrors.phone = "Contact number cannot exceed 12 digits.";
    }
    if (!formData.acknowledge) nextErrors.acknowledge = "Please confirm that the details and documents are correct.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function submitRegistration() {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (!screenshotFile) {
        throw new Error("Please upload the payment screenshot to proceed.");
      }

      const payload = new FormData();
      payload.append("college", formData.college.trim());
      payload.append("state", formData.state.trim());
      payload.append("district", formData.district.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("teamCount", String(teamCountNumber));
      payload.append("acknowledge", formData.acknowledge ? "1" : "0");
      payload.append("paymentScreenshot", screenshotFile);
      payload.append(
        "teamDetails",
        JSON.stringify(formData.teamDetails.slice(0, teamCountNumber))
      );

      const response = await fetch(REGISTRATION_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const responsePayload = await response.json().catch(() => null) as {
        message?: string;
        errors?: Record<string, string[]>;
      } | null;

      if (!response.ok) {
        const firstValidationMessage = responsePayload?.errors
          ? Object.values(responsePayload.errors).flat()[0]
          : null;

        throw new Error(
          firstValidationMessage
            || responsePayload?.message
            || "Unable to save the registration right now."
        );
      }

      hasSubmittedRef.current = true;
      trackFormEvent("registration_submitted", 6, {
        team_count: teamCountNumber,
        college: formData.college.trim(),
        amount: teamCountNumber * 100,
        payment_screenshot_uploaded: Boolean(screenshotFile),
      }, { once: true });

      setStep(6);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to save the registration right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => {
        setShouldRenderModal(true);
        setIsClosingModal(false);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    if (!shouldRenderModal) {
      return;
    }

    const startExitTimer = window.setTimeout(() => {
      setIsClosingModal(true);
    }, 0);

    const timeoutId = window.setTimeout(() => {
      setShouldRenderModal(false);
      setIsClosingModal(false);
    }, 280);

    return () => {
      window.clearTimeout(startExitTimer);
      window.clearTimeout(timeoutId);
    };
  }, [isOpen, shouldRenderModal]);

  useEffect(() => {
    if (!shouldRenderModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeForm();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldRenderModal, closeForm]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    trackingSessionIdRef.current = createTrackingSessionId();
    trackedEventsRef.current = new Set();
    hasSubmittedRef.current = false;

    trackFormEvent("form_opened", 1, undefined, { once: true });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (step === 5) {
      trackFormEvent("payment_step_viewed", 5, {
        team_count: teamCountNumber,
        amount: teamCountNumber * 100,
      }, { once: true });
    }
  }, [isOpen, step, teamCountNumber]);

  useEffect(() => {
    if (isOpen || !trackingSessionIdRef.current || hasSubmittedRef.current) {
      return;
    }

    trackFormEvent("form_abandoned", step, {
      team_count: teamCountNumber,
      completed_teams: step === 3 ? currentTeamIndex : teamCountNumber,
    }, { once: true });
  }, [isOpen, step, teamCountNumber, currentTeamIndex]);

  function updateTeamDetail(index: number, field: keyof TeamDetail, value: string) {
    setFormData((current) => {
      const nextTeamDetails = [...current.teamDetails];
      const targetTeam = nextTeamDetails[index] ?? { ...EMPTY_TEAM_DETAIL };
      nextTeamDetails[index] = {
        ...targetTeam,
        [field]: value,
      };
      return {
        ...current,
        teamDetails: nextTeamDetails,
      };
    });
  }

  function handleTeamCountChange(countString: string) {
    const nextCount = Math.max(1, Math.min(10, Number(countString) || 1));
    setFormData((current) => {
      const nextTeamDetails = [...current.teamDetails];
      while (nextTeamDetails.length < nextCount) {
        nextTeamDetails.push({ ...EMPTY_TEAM_DETAIL });
      }
      return {
        ...current,
        teamCount: String(nextCount),
        teamDetails: nextTeamDetails,
      };
    });
    if (currentTeamIndex >= nextCount) {
      setCurrentTeamIndex(nextCount - 1);
    }
  }

  function handleNextFromStepOne() {
    if (!validateStepOne()) return;
    trackFormEvent("teams_selected", 1, {
      team_count: teamCountNumber,
    }, { once: true });
    setStep(3);
  }

  function handleNextFromStepThree() {
    if (!validateStepThree()) return;
    trackFormEvent("participant_details_completed", 3, {
      team_count: teamCountNumber,
      team_index: currentTeamIndex,
      completed_teams: currentTeamIndex + 1,
    }, {
      once: isLastTeam,
    });
    if (!isLastTeam) {
      setCurrentTeamIndex((index) => index + 1);
      return;
    }
    setStep(4);
  }

  function handleStepFourSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStepFour()) return;
    trackFormEvent("institution_details_completed", 4, {
      team_count: teamCountNumber,
      college: formData.college.trim(),
      state: formData.state.trim(),
      district: formData.district.trim(),
    }, { once: true });
    setStep(5);
  }

  async function handlePaymentSubmit() {
    if (!screenshotFile) {
      setScreenshotError("Please upload the payment screenshot to proceed.");
      return;
    }
    setScreenshotError("");
    await submitRegistration();
  }

  function handleReset() {
    setStep(1);
    setCurrentTeamIndex(0);
    setErrors({});
    setSubmitError("");
    setScreenshotFile(null);
    setScreenshotError("");
    setFormData({
      college: "",
      state: "",
      district: "",
      teamCount: "1",
      phone: "",
      acknowledge: false,
      teamDetails: [{ ...EMPTY_TEAM_DETAIL }],
    });
  }

  const currentTeam = formData.teamDetails[currentTeamIndex] ?? EMPTY_TEAM_DETAIL;

  const modalJSX = shouldRenderModal ? (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 overflow-y-auto ${
        isClosingModal ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative z-[100000] my-auto w-full ${step === 5 ? "max-w-3xl" : "max-w-lg"} rounded-[2rem] border border-slate-200/80 bg-white/98 text-slate-900 backdrop-blur-3xl p-4 sm:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.4)] max-h-[88vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transition-all duration-300 ${
          isClosingModal ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeForm}
          aria-label="Close form"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 hover:bg-[#00AEEF] hover:text-white transition-all cursor-pointer shadow-sm z-30"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M6 6L18 18" />
            <path d="M18 6L6 18" />
          </svg>
        </button>

        {/* Modal Header & Progress Indicator */}
        {step < 6 ? (
          <div className="mb-4 text-center">
            <div className="inline-flex items-center justify-center gap-1.5 mb-2.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-black transition-all ${step >= 1 ? "bg-[#00AEEF] text-white shadow-[0_0_10px_rgba(0,174,239,0.5)]" : "bg-slate-100 text-slate-400"}`}>1</span>
              <span className={`h-0.5 w-6 rounded-full ${step >= 3 ? "bg-[#00AEEF]" : "bg-slate-200"}`} />
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-black transition-all ${step >= 3 ? "bg-[#00AEEF] text-white shadow-[0_0_10px_rgba(0,174,239,0.5)]" : "bg-slate-100 text-slate-400"}`}>2</span>
              <span className={`h-0.5 w-6 rounded-full ${step >= 4 ? "bg-[#00AEEF]" : "bg-slate-200"}`} />
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-black transition-all ${step >= 4 ? "bg-[#00AEEF] text-white shadow-[0_0_10px_rgba(0,174,239,0.5)]" : "bg-slate-100 text-slate-400"}`}>3</span>
              <span className={`h-0.5 w-6 rounded-full ${step >= 5 ? "bg-[#00AEEF]" : "bg-slate-200"}`} />
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-black transition-all ${step >= 5 ? "bg-[#00AEEF] text-white shadow-[0_0_10px_rgba(0,174,239,0.5)]" : "bg-slate-100 text-slate-400"}`}>4</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {step === 1 && "Select Number of Teams"}
              {step === 3 && `Team ${currentTeamIndex + 1} Participant Details`}
              {step === 4 && "College Info & Verification"}
              {step === 5 && "Registration Fee Payment"}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {step === 1 && "Choose how many 2-member teams you wish to register."}
              {step === 3 && `Team ${currentTeamIndex + 1} of ${teamCountNumber} · 2 Members per team.`}
              {step === 4 && "Provide institution details & confirm terms."}
              {step === 5 && "Scan QR code & upload payment receipt screenshot."}
            </p>
          </div>
        ) : null}

        {/* Step 1: Select Teams */}
        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="modal-teamCount" className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Number of 2-Member Teams *
              </label>
              <select
                id="modal-teamCount"
                value={formData.teamCount}
                onChange={(e) => {
                  clearErrors(["teamCount"]);
                  handleTeamCountChange(e.target.value);
                }}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#00AEEF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Team (₹100)" : `Teams (₹${num * 100})`}
                  </option>
                ))}
              </select>
              {errors.teamCount ? <p className="mt-1 text-[0.7rem] font-bold text-red-500">{errors.teamCount}</p> : null}
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 text-xs text-slate-700 space-y-1 shadow-sm">
              <p className="font-extrabold text-[#00AEEF] uppercase tracking-wider text-[0.65rem]">Registration Summary:</p>
              <p className="font-semibold">• {teamCountNumber} Team(s) = {teamCountNumber * 2} Total Participants</p>
              <p className="font-semibold">• Fee: <strong className="text-slate-900">₹{teamCountNumber * 100}</strong> (₹100 per team, incl. GST)</p>
              <p className="text-slate-500 text-[0.7rem]">• Includes access to all 3 quiz rounds &amp; exhibition.</p>
            </div>

            <button
              type="button"
              className="w-full bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider py-3 rounded-full shadow-[0_4px_15px_rgba(0,174,239,0.35)] transition-all cursor-pointer text-xs sm:text-sm"
              onClick={handleNextFromStepOne}
            >
              Continue to Participant Details →
            </button>
          </div>
        ) : step === 3 ? (
          /* Step 2: Participant Details */
          <div className="space-y-3.5">
            <div className="flex items-center justify-between rounded-lg bg-[#00AEEF]/10 border border-[#00AEEF]/30 px-3 py-1.5 text-xs font-bold text-[#00AEEF]">
              <span>Team {currentTeamIndex + 1} of {teamCountNumber}</span>
              <span className="text-slate-500 text-[0.7rem] font-normal">2 Members Required</span>
            </div>

            {/* Participant 1 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 space-y-2">
              <span className="block text-[0.7rem] font-black uppercase tracking-wider text-[#00AEEF]">👑 Participant 1 (Team Leader)</span>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <div>
                  <input
                    type="text"
                    id={`p1-name-${currentTeamIndex}`}
                    value={currentTeam.participantOneName}
                    onChange={(e) => {
                      clearErrors([`participantOneName-${currentTeamIndex}`]);
                      updateTeamDetail(currentTeamIndex, "participantOneName", e.target.value);
                    }}
                    placeholder="Full Name *"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20"
                  />
                  {errors[`participantOneName-${currentTeamIndex}`] ? (
                    <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors[`participantOneName-${currentTeamIndex}`]}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="tel"
                    id={`p1-contact-${currentTeamIndex}`}
                    maxLength={12}
                    value={currentTeam.participantOneContact}
                    onChange={(e) => {
                      clearErrors([`participantOneContact-${currentTeamIndex}`]);
                      updateTeamDetail(currentTeamIndex, "participantOneContact", e.target.value);
                    }}
                    placeholder="WhatsApp / Mobile *"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20"
                  />
                  {errors[`participantOneContact-${currentTeamIndex}`] ? (
                    <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors[`participantOneContact-${currentTeamIndex}`]}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="email"
                    id={`p1-email-${currentTeamIndex}`}
                    value={currentTeam.participantOneEmail || ""}
                    onChange={(e) => {
                      clearErrors([`participantOneEmail-${currentTeamIndex}`]);
                      updateTeamDetail(currentTeamIndex, "participantOneEmail", e.target.value);
                    }}
                    placeholder="Email ID *"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20"
                  />
                  {errors[`participantOneEmail-${currentTeamIndex}`] ? (
                    <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors[`participantOneEmail-${currentTeamIndex}`]}</p>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Participant 2 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 space-y-2">
              <span className="block text-[0.7rem] font-black uppercase tracking-wider text-[#F26539]">🤝 Participant 2 (Teammate)</span>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <div>
                  <input
                    type="text"
                    id={`p2-name-${currentTeamIndex}`}
                    value={currentTeam.participantTwoName}
                    onChange={(e) => {
                      clearErrors([`participantTwoName-${currentTeamIndex}`]);
                      updateTeamDetail(currentTeamIndex, "participantTwoName", e.target.value);
                    }}
                    placeholder="Full Name *"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20"
                  />
                  {errors[`participantTwoName-${currentTeamIndex}`] ? (
                    <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors[`participantTwoName-${currentTeamIndex}`]}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="tel"
                    id={`p2-contact-${currentTeamIndex}`}
                    maxLength={12}
                    value={currentTeam.participantTwoContact}
                    onChange={(e) => {
                      clearErrors([`participantTwoContact-${currentTeamIndex}`]);
                      updateTeamDetail(currentTeamIndex, "participantTwoContact", e.target.value);
                    }}
                    placeholder="WhatsApp / Mobile *"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20"
                  />
                  {errors[`participantTwoContact-${currentTeamIndex}`] ? (
                    <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors[`participantTwoContact-${currentTeamIndex}`]}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="email"
                    id={`p2-email-${currentTeamIndex}`}
                    value={currentTeam.participantTwoEmail || ""}
                    onChange={(e) => {
                      clearErrors([`participantTwoEmail-${currentTeamIndex}`]);
                      updateTeamDetail(currentTeamIndex, "participantTwoEmail", e.target.value);
                    }}
                    placeholder="Email ID *"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 focus:border-[#00AEEF] focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20"
                  />
                  {errors[`participantTwoEmail-${currentTeamIndex}`] ? (
                    <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors[`participantTwoEmail-${currentTeamIndex}`]}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider text-[0.7rem] py-2.5 px-3 rounded-full transition-all cursor-pointer"
                onClick={() => {
                  if (currentTeamIndex > 0) {
                    setCurrentTeamIndex((i) => i - 1);
                  } else {
                    setStep(1);
                  }
                }}
              >
                Back
              </button>
              <button
                type="button"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider text-[0.7rem] py-2.5 px-3 rounded-full transition-all cursor-pointer"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="button"
                className="bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider text-[0.7rem] py-2.5 px-3 rounded-full shadow-[0_4px_12px_rgba(0,174,239,0.3)] transition-all cursor-pointer"
                onClick={handleNextFromStepThree}
              >
                {isLastTeam ? "College Info →" : "Next Team →"}
              </button>
            </div>
          </div>
        ) : step === 4 ? (
          /* Step 3: College Info */
          <form onSubmit={handleStepFourSubmit} className="space-y-3.5">
            <div>
              <label htmlFor="college" className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                College / Institution Name *
              </label>
              <input
                type="text"
                id="college"
                value={formData.college}
                onChange={(e) => {
                  clearErrors(["college"]);
                  setFormData((current) => ({ ...current, college: e.target.value }));
                }}
                placeholder="e.g. St. Thomas College, Thrissur"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#00AEEF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 transition-all"
              />
              {errors.college ? <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors.college}</p> : null}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="state" className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={(e) => {
                    clearErrors(["state"]);
                    setFormData((current) => ({ ...current, state: e.target.value }));
                  }}
                  placeholder="e.g. Kerala"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#00AEEF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 transition-all"
                />
                {errors.state ? <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors.state}</p> : null}
              </div>

              <div>
                <label htmlFor="district" className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                  District *
                </label>
                <input
                  type="text"
                  id="district"
                  value={formData.district}
                  onChange={(e) => {
                    clearErrors(["district"]);
                    setFormData((current) => ({ ...current, district: e.target.value }));
                  }}
                  placeholder="e.g. Thrissur"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#00AEEF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 transition-all"
                />
                {errors.district ? <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors.district}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                College Contact Number *
              </label>
              <input
                type="tel"
                id="phone"
                maxLength={12}
                value={formData.phone}
                onChange={(e) => {
                  clearErrors(["phone"]);
                  setFormData((current) => ({ ...current, phone: e.target.value }));
                }}
                placeholder="Contact Number for verification"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#00AEEF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/20 transition-all"
              />
              {errors.phone ? <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors.phone}</p> : null}
            </div>

            <div className="pt-0.5">
              <label className="flex items-start gap-2.5 text-xs text-slate-600 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.acknowledge}
                  onChange={(e) => {
                    clearErrors(["acknowledge"]);
                    setFormData((current) => ({ ...current, acknowledge: e.target.checked }));
                  }}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-[#00AEEF] focus:ring-[#00AEEF]"
                />
                <span>I confirm that all entered details are accurate and we agree to quiz rules.</span>
              </label>
              {errors.acknowledge ? <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{errors.acknowledge}</p> : null}
              {submitError ? <p className="mt-0.5 text-[0.65rem] font-bold text-red-500">{submitError}</p> : null}
            </div>

            <div className={`grid grid-cols-1 gap-2 pt-1 ${formData.acknowledge ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              <button
                type="button"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider text-[0.7rem] py-2.5 px-3 rounded-full transition-all cursor-pointer"
                onClick={() => setStep(3)}
              >
                Back
              </button>
              <button
                type="button"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider text-[0.7rem] py-2.5 px-3 rounded-full transition-all cursor-pointer"
                onClick={handleReset}
              >
                Reset
              </button>
              {formData.acknowledge ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider text-[0.7rem] py-2.5 px-3 rounded-full shadow-[0_4px_12px_rgba(0,174,239,0.3)] transition-all cursor-pointer"
                >
                  {isSubmitting ? "Saving..." : "Payment →"}
                </button>
              ) : null}
            </div>
          </form>
        ) : step === 5 ? (
          /* Step 5: Payment & Screenshot Upload (2-Column Side-by-Side) */
          <div className="space-y-2.5">
            {/* Top Banner */}
            <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#0092C8] px-3.5 py-1.5 text-white shadow-sm">
              <div>
                <p className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/90">UPI Payment Portal</p>
                <p className="text-xs font-extrabold text-white">Amala Book Festival Quiz 2026</p>
              </div>
              <div className="text-right">
                <p className="text-[0.55rem] font-medium text-white/80">Total Payable</p>
                <p className="text-sm sm:text-base font-black">₹{teamCountNumber * 100}</p>
              </div>
            </div>

            {/* Side-by-Side 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
              {/* LEFT COLUMN: QR CODE (Unblurred & Sharp) */}
              <div className="flex flex-col items-center justify-between rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm text-center">
                <div
                  className="relative cursor-pointer group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1 transition-all hover:border-[#00AEEF] hover:shadow-md w-full flex justify-center"
                  onClick={() => setShowQrModal(true)}
                  title="Click to Enlarge QR Code"
                >
                  {/* Unblurred Sharp QR Code */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/payment.jpeg"
                    alt="South Indian Bank UPI Payment QR Code"
                    className="h-40 sm:h-44 max-h-[170px] w-auto max-w-full rounded-lg object-contain bg-white p-1 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                    <span className="bg-[#00AEEF] text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                      🔍 Tap to Enlarge
                    </span>
                  </div>
                </div>

                <div className="mt-1.5 flex items-center justify-center w-full px-1">
                  <button
                    type="button"
                    onClick={() => setShowQrModal(true)}
                    className="text-[0.68rem] font-extrabold text-[#00AEEF] hover:underline flex items-center justify-center gap-1 cursor-pointer"
                  >
                    🔍 Click to Enlarge QR Code
                  </button>
                </div>

                <p className="mt-0.5 text-[0.6rem] font-extrabold text-slate-800 uppercase tracking-wider">
                  Scan & Pay using any UPI App
                </p>
              </div>

              {/* RIGHT COLUMN: CONTENT & UPLOAD */}
              <div className="space-y-2 flex flex-col justify-between">
                <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-2.5 space-y-1">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-1 text-[0.65rem]">
                    <span className="font-bold text-slate-500">Account:</span>
                    <span className="font-extrabold text-slate-900 truncate max-w-[130px]">AMALA CANCER HOSPITAL</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-1 text-[0.65rem]">
                    <span className="font-bold text-slate-500">Bank:</span>
                    <span className="font-extrabold text-slate-900">South Indian Bank</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-1 text-[0.65rem]">
                    <span className="font-bold text-slate-500">Teams:</span>
                    <span className="font-extrabold text-[#00AEEF]">{teamCountNumber} Team(s)</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.65rem]">
                    <span className="font-bold text-slate-500">Fee Payable:</span>
                    <span className="font-extrabold text-emerald-600">₹{teamCountNumber * 100}</span>
                  </div>
                </div>

                {/* Upload Payment Screenshot */}
                <div>
                  <label className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                    Upload Payment Screenshot with Transaction ID *
                  </label>
                  <div className="rounded-xl border-2 border-dashed border-[#00AEEF]/50 bg-blue-50/50 p-2.5 text-center transition-all hover:bg-blue-50/80">
                    <label className="cursor-pointer flex flex-col items-center justify-center gap-0.5">
                      <span className="text-base">📸</span>
                      <span className="text-[0.68rem] font-extrabold text-[#00AEEF]">
                        {screenshotFile ? `✓ ${screenshotFile.name}` : "Upload Screenshot with Transaction ID *"}
                      </span>
                      <span className="text-[0.6rem] text-slate-500 font-medium">
                        {screenshotFile ? "Click to change file" : "Ensure UPI Transaction ID / UTR is visible"}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setScreenshotFile(file);
                            setScreenshotError("");
                          }
                        }}
                      />
                    </label>
                  </div>
                  {screenshotError ? (
                    <p className="mt-0.5 text-[0.62rem] font-extrabold text-red-500 text-center animate-pulse">
                      {screenshotError}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            {/* FULL WIDTH ACTION BUTTONS */}
            <div className="grid grid-cols-3 gap-2 pt-1.5 border-t border-slate-100">
              <button
                type="button"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider text-[0.68rem] py-2 px-2.5 rounded-full transition-all cursor-pointer"
                onClick={() => setStep(4)}
              >
                Back
              </button>
              <button
                type="button"
                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold uppercase tracking-wider text-[0.68rem] py-2 px-2.5 rounded-full transition-all cursor-pointer"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                className={
                  screenshotFile
                    ? "bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider text-[0.72rem] py-2 px-2.5 rounded-full shadow-[0_4px_15px_rgba(0,174,239,0.4)] transition-all cursor-pointer hover:scale-105"
                    : "bg-slate-200 text-slate-400 border border-slate-300 font-extrabold uppercase tracking-wider text-[0.72rem] py-2 px-2.5 rounded-full cursor-not-allowed shadow-none opacity-80 transition-all"
                }
                onClick={handlePaymentSubmit}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT →"}
              </button>
            </div>
          </div>
        ) : (
          /* Step 6: Registration Success Screen */
          <div className="text-center py-2 space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl shadow-lg animate-bounce">
              🏆
            </div>
            <div>
              <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[0.65rem] font-black uppercase tracking-widest text-emerald-600 mb-1">
                Registration Complete
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                REGISTRATION SUCCESSFUL!
              </h3>
              <p className="mt-1 text-xs text-slate-600 font-medium max-w-xs mx-auto">
                Your team registration for Amala National Book Festival Quiz 2026 has been successfully recorded.
              </p>
            </div>

            {/* Registration Summary Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs space-y-2.5 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="font-bold text-slate-500">Institution:</span>
                <span className="font-extrabold text-slate-900 truncate max-w-[170px]">{formData.college || "Submitted College"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="font-bold text-slate-500">Teams Registered:</span>
                <span className="font-extrabold text-[#00AEEF]">{teamCountNumber} Team(s) ({teamCountNumber * 2} Members)</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                <span className="font-bold text-slate-500">Total Fee Paid:</span>
                <span className="font-extrabold text-emerald-600">₹{teamCountNumber * 100} (Confirmed)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-500">Payment Screenshot:</span>
                <span className="font-semibold text-slate-700 truncate max-w-[160px]">✓ {screenshotFile?.name || "Uploaded"}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="w-full bg-[#00AEEF] hover:bg-[#0092C8] text-white font-extrabold uppercase tracking-wider text-xs py-3.5 px-4 rounded-full shadow-[0_4px_15px_rgba(0,174,239,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
                onClick={() => {
                  handleReset();
                  closeForm();
                }}
              >
                DONE & RETURN TO WEBSITE ✓
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox for QR Code */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-[100005] flex flex-col items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-5 shadow-2xl flex flex-col items-center border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              aria-label="Close QR Lightbox"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
            <p className="text-xs font-extrabold text-[#00AEEF] uppercase tracking-widest mb-2">
              Official UPI Payment QR Code
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/payment.jpeg"
              alt="Enlarged UPI Payment QR Code"
              className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-md border border-slate-200 bg-white p-1"
            />
            <p className="mt-3 text-xs font-bold text-slate-800">
              Amala Cancer Hospital Society · South Indian Bank
            </p>
            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="mt-3 bg-[#00AEEF] text-white font-extrabold text-xs px-6 py-2.5 rounded-full cursor-pointer hover:bg-[#0092C8]"
            >
              Close Full View
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;

  return (
    <>
      {showTrigger ? (
        <div className="flex justify-center lg:justify-end w-full">
          <style>{`
            @keyframes heroBtnPulse {
              0%, 100% {
                box-shadow: 0 0 25px rgba(0, 174, 239, 0.55), 0 0 50px rgba(0, 174, 239, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.6);
              }
              50% {
                box-shadow: 0 0 45px rgba(0, 174, 239, 0.9), 0 0 85px rgba(0, 174, 239, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.9);
              }
            }
            @keyframes lightSweepBeam {
              0% { transform: translateX(-150%) skewX(-25deg); }
              100% { transform: translateX(300%) skewX(-25deg); }
            }
            @keyframes gradientBgFlow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .hero-cta-btn-pulse {
              animation: heroBtnPulse 2.8s infinite ease-in-out;
            }
            .hero-cta-beam {
              animation: lightSweepBeam 2.4s infinite ease-in-out;
            }
            .hero-cta-flow {
              background-size: 200% 200%;
              animation: gradientBgFlow 4s infinite linear;
            }
          `}</style>
          <button
            type="button"
            onClick={openForm}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 hero-cta-btn-pulse"
          >
            {/* Animated Outer Gradient Rim (White to Primary Cyan) */}
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#00AEEF,#ffffff,#00AEEF,#ffffff,#00AEEF)] hero-cta-flow opacity-90 group-hover:opacity-100" />

            {/* Inner Button Main Surface */}
            <span className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#0096CE] to-[#007DAE] px-8 sm:px-10 py-4 sm:py-4.5 text-sm sm:text-base font-extrabold uppercase tracking-widest text-white shadow-inner">
              {/* Continuous Light Sweep Beam across button */}
              <span className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent hero-cta-beam pointer-events-none" />

              {/* Sparkle Lightning Icon */}
              <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h7v8l10-12h-7z" />
                </svg>
              </span>

              {/* Main Button Label */}
              <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                START TEAM REGISTRATION
              </span>

              {/* Animated Arrow Icon */}
              <span className="relative z-10 font-black text-lg transition-transform duration-300 group-hover:translate-x-2 drop-shadow-md">
                →
              </span>
            </span>
          </button>
        </div>
      ) : null}

      {typeof document !== "undefined" && modalJSX ? createPortal(modalJSX, document.body) : null}
    </>
  );
}
