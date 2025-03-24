import Demo from "@/components/home/demo-section";
import FaqSection from "@/components/home/faq-section";
import FeedBack from "@/components/home/feedback-section";
import InsightsSection from "@/components/home/insight-section";
import PricingSection from "@/components/home/price-section";
import TeamSection from "@/components/home/team-section";

export default function Home() {
  return (
    <>
      <PricingSection />
      <FeedBack />
      <FaqSection />
      <TeamSection />
      <InsightsSection />
      <Demo />
    </>
  );
}
