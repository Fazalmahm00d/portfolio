"use client"
import HomeCompo1 from "./HomeCompo1";
import HomeCompo2 from "./HomeCompo2";
import HomeCompo3 from "./HomeCompo3";
import HomeCompo4 from "./HomeCompo4";
import HomeCompo5 from "./HomeCompo5";
import HomeCompo6 from "./HomeCompo6";

function HomeMain(){
    const handleMouseMove = (e:any) => {
        const container = document.getElementById("container"); // Fixed to get the container by ID
        
        if (container) {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          container.style.setProperty("--mouse-x", `${x}px`);
          container.style.setProperty("--mouse-y", `${y}px`);
        }
      };
    return(
    <div id="container" className="relative group "
    onMouseMove={handleMouseMove}>
        <div
            className="absolute   inset-0  opacity-0 group-hover:opacity-100 rounded-lg"
            style={{
              background:
                "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.2), transparent 40%)",
            }}
          ></div>
        <HomeCompo1/>
        <HomeCompo2/>
        <HomeCompo3/>
        <HomeCompo4/>
        <HomeCompo5/>
        <HomeCompo6/>
    </div>
    )
}

export default HomeMain;