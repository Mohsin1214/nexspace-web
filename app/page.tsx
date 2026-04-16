import Hero           from "@/components/sections/Hero";
import IntroStatement  from "@/components/sections/IntroStatement";
import Services        from "@/components/sections/Services";
import Portfolio       from "@/components/sections/Portfolio";
import About           from "@/components/sections/About";
import Testimonials    from "@/components/sections/Testimonials";
import CtaBanner       from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
