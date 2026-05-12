"use client";
import { useState, useEffect } from "react";
import { ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function AgeGate() {
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    const isVerified = localStorage.getItem("ogs_age_verified");
    if (!isVerified) {
      setVerified(false);
    }
  }, []);

  if (verified) return null;

  const handleVerify = () => {
    localStorage.setItem("ogs_age_verified", "true");
    setVerified(true);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-background border border-lab-border p-8 md:p-12 rounded-xl max-w-lg w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-topo opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds" width={64} height={64} className="mb-6 opacity-90 invert dark:invert-0" />
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 uppercase">Age Verification</h2>
          <p className="text-lab-text mb-8">
            You must be 21 years of age or older to enter this site. By entering, you agree to our Terms of Service and Privacy Policy. All genetics are sold as novelty souvenirs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
              onClick={handleDeny}
              className="px-6 py-3 border border-lab-border rounded text-lab-text hover:bg-lab-bg transition-all font-medium uppercase tracking-widest text-sm w-full sm:w-auto"
            >
              I am under 21
            </button>
            <button 
              onClick={handleVerify}
              className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition-all font-medium uppercase tracking-widest text-sm w-full sm:w-auto shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <ShieldAlert size={16} /> I am 21 or older
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
