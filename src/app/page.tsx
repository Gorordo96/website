import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Courses from '@/components/sections/courses';

import { portfolioData } from '@/lib/portfolio-data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Experience data={portfolioData.experience} />
        <Education data={portfolioData.education} />
        <Courses data={portfolioData.courses} />
      </main>
      <Footer />
    </div>
  );
}
