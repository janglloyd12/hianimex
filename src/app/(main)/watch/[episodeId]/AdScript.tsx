"use client";

import { useEffect } from "react";

export default function AdScript() {
  useEffect(() => {
    // Dynamically inject the popunder ad script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "";
    script.async = true;

    // Append script to the <head> tag
    document.head.appendChild(script);

    // Log success or error
    script.onload = () => console.log("Ad script loaded successfully.");
    script.onerror = () => console.error("Failed to load ad script.");

    // Cleanup script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
}
