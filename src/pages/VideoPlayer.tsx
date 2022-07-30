import React, { useState, useEffect } from 'react';

export default function VideoPlayer({ src }) {
  const [StateSrc, setStateSrc] = useState(src)
  const [fade, setFade] = useState("fade-out");

  useEffect(() => {
    setFade("fade-out");
    setTimeout(() => {
      setStateSrc(src);
      
    }, 300);

    setTimeout(() => {
      setFade("fade-in");
      
    }, 1000);
    
    
  },[src])
  useEffect(() => {
    setTimeout(() => {
      setFade("fade-in");
      
    }, 1000);
    
  },[])
    return (
        <iframe
            title={src}
            src={StateSrc}
            className={`resp-iframe ${fade}`}
            width='640'
            height='350'
            frameBorder='0'
            webkitAllowFullScreen={true}
            mozAllowFullScreen={true}
            allowFullScreen={true}
            allow='autoplay: fullscreen'
            controll='0'
        ></iframe>

  )
}
