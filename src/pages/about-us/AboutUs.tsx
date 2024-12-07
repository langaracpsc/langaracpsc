import { useEffect, useState } from "react";

import { AboutHero } from "@/components/about-us/AboutHero";
import { Executive } from "@/types/member";
import { ExecutiveDialog } from "../../components/about-us/ExecutiveDialog";
import { ExecutiveMemberProfileList } from "@/components/about-us/ExecutiveMemberList";
import { MissionSection } from "../../components/about-us/MissionSection";
import { ValuesSection } from "../../components/about-us/ValuesSection";
import { useExecutiveStore } from "@/store/executiveStore";

export default function AboutPage() {
  const { executives, fetchExecutives } = useExecutiveStore((state) => state);
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(
    null
  );

  useEffect(() => {
    if (executives.length === 0) {
      fetchExecutives();
    }
  }, [executives.length, fetchExecutives]);

  const currentExecutives = executives.filter(
    (exec) => exec.current_status === "Active"
  );
  const retiredExecutives2024 = executives.filter(
    (exec) =>
      exec.current_status !== "Active" && exec.last_term?.includes("2024")
  );
  const retiredExecutives2023 = executives.filter(
    (exec) =>
      exec.current_status !== "Active" && exec.last_term?.includes("2023")
  );

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(241,90,34,0.2)] via-black to-black">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <ExecutiveMemberProfileList
        title="Current Executives"
        executives={currentExecutives}
        onSelectExecutive={setSelectedExecutive}
      />
      <ExecutiveMemberProfileList
        title="Retired Executives - 2024"
        executives={retiredExecutives2024}
        onSelectExecutive={setSelectedExecutive}
      />
      <ExecutiveMemberProfileList
        title="Retired Executives - 2023"
        executives={retiredExecutives2023}
        onSelectExecutive={setSelectedExecutive}
      />
      <ExecutiveDialog
        executive={selectedExecutive}
        onClose={() => setSelectedExecutive(null)}
      />
    </div>
  );
}
