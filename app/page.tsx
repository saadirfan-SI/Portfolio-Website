import Encryption from "@/components/main/Encryption"; // Importing Encryption component
import Hero from "@/components/main/Hero"; // Importing Hero component
import Projects from "@/components/main/Projects"; // Importing Projects component
import Skills from "@/components/main/Skills"; // Importing Skills component
import Image from "next/image"; // Importing Image component from Next.js

export default function Home() { // Exporting default function Home
  return ( // Returning JSX for the Home component
    <main className="h-full w-full"> {/* Main element with full height and width */}
      <div className="flex flex-col gap-20"> {/* Div container with flex column layout and gap */}
        <Hero /> {/* Rendering Hero component */}
        <Skills /> {/* Rendering Skills component */}
        <Encryption /> {/* Rendering Encryption component */}
        <Projects /> {/* Rendering Projects component */}
      </div>
    </main>
  );
}
