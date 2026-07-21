import {useState, useEffect} from "react";

function MouseTracker() {
  const [track, setTrack] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => { setTrack({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };

    }, []);

    return (
        <div>   
        <h1>X: {track.x} <br /> Y: {track.y}</h1>
        </div>
    );
}

export default MouseTracker;
