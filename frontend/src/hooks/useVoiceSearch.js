import { useState, useEffect, useCallback, useRef } from "react";

const useVoiceSearch = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSupported(true);
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = "en-IN";

      rec.onresult = (e) => {
        const current = Array.from(e.results)
          .map((r) => r[0].transcript)
          .join(" ");
        setTranscript(current);
      };

      rec.onend = () => setListening(false);
      rec.onerror = (e) => {
        console.error("Speech recognition error:", e.error);
        setListening(false);
      };

      recognitionRef.current = rec;
    }

    return () => recognitionRef.current?.abort();
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current || listening) return;
    setTranscript("");
    setListening(true);
    recognitionRef.current.start();
  }, [listening]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setListening(false);
  }, []);

  return { listening, transcript, supported, startListening, stopListening, reset };
};

export default useVoiceSearch;
