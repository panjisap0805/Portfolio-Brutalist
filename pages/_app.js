import "@/styles/globals.css";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/layout/LoadingScreen";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={loading ? 'hidden' : 'block'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
