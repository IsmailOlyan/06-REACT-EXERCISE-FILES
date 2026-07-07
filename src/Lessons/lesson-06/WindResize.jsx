import {useState, useEffect} from "react";

function WindResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => { setWidth(window.innerWidth); };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    }, []);

    return (
        <div>   
        <h1>Window Width: {width}px</h1>
        </div>
    );
}

export default WindResize;
