import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyTOC from "../components/PrivacyTOC";
import PrivacyContent from "../components/PrivacyContent";
import PrivacyBack from "../components/PrivacyBack";

export const metadata = {
  title: "Retrio · Privacy Policy",
  description: "Privacy policy for Retrio, the retro game launcher for Windows.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 40px 0" }}>
        <PrivacyBack />
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 100px", display: "flex", gap: 80 }}>
        <PrivacyContent />
        <PrivacyTOC />
      </div>
      <Footer />
    </>
  );
}
