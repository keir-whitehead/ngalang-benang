import Capability from "@/components/capability";
import Contact from "@/components/contact";
import ExtraInfo from "@/components/home/extraInfo";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Team from "@/components/home/team";
import Values from "@/components/home/values";
import RecentProjects from "@/components/home/recentProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <RecentProjects />
      <Values />
      <Capability />
      <ExtraInfo />
      <Team />
      <Contact />
    </div>
  );
}
