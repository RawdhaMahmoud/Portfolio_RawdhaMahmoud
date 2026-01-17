import About from "@/components/sections/About";
import Profile from "@/components/sections/Profile/Profile";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
// import Certifications from "@/components/sections/Profile/Certifications";
// import EducationTimeline from "@/components/sections/Profile/EducationTimeline";


export default function Home() {
  return (
    <main>
       <About />
      <Profile/>
      <Projects />
      <Contact />  
      {/* <EducationTimeline />
      <Certifications /> */}


    </main>
  );
}

