import { useEffect, useState } from "react"
import "./App.css"
import { easeInOut, motion } from "framer-motion";
export default function App() {
  const [isvisible, setIsVisible] = useState(false);
  function handleScroll() {
    const elements = Array.from(document.getElementsByClassName("animated-div"));

    const isaNYelemetnvisible = elements.some(element => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0
    });
    setIsVisible(isaNYelemetnvisible);

  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
  return <>
    <div className="h-[200vh]  flex flex-col justify-center items-center">

      <div
        // id="animated-div"
        className={`${isvisible ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"} 
      animated-div p-8 bg-blue-500 text-white rounded shadow-lg transform transition-all duration-1000`}
      >
        <h1>hello i am scrolling into view</h1>
      </div>

    </div>
    <div className="h-[200vh]  flex flex-col justify-center items-center">
      <div className="h-screen"></div>
      <motion.div
        // id="animated-div"
        className={` animated-div p-8 text-black border-2 rounded shadow-lg `}
        initial={{ opacity: 0, x: -500 }}
        animate={isvisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <a href="/AKASH_RESUME.pdf" download >
          
            <button className="flex gap-5 items-center justify-center">Resume
              
              <motion.svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"
              animate={{y:[0,-18,0]}}
              transition={{
                duration:1,
                repeat:Infinity,
                repeatType:"loop",
                ease:"easeInOut"
              }}
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-2
         40v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></motion.svg></button>
          

        </a>
      </motion.div>

    </div>
  </>
}