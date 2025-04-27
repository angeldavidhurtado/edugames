import { useEffect, useRef, useState } from "react";

const BannerCarousel = ({ items = [], speed = 60 }) => {
  const [data, setData] = useState(0)
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const posX = useRef(0);
  const lastTime = useRef(performance.now());
  console.log(lastTime)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    // duplicamos los elementos para el loop infinito
    contentRef.current.innerHTML += contentRef.current.innerHTML;

    const animate = (time) => {
      if (!containerRef.current || !contentRef.current) return

      const delta = time - lastTime.current;
      lastTime.current = time;

      posX.current -= (speed * delta) / 1000;

      const totalWidth = contentRef.current.scrollWidth / 2;
      if (Math.abs(posX.current) >= totalWidth) {
        posX.current = 0;
      }

      contentRef.current.style.transform = `translateX(${posX.current}px)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [speed]);

  return (
    <div ref={containerRef}>
      <div ref={contentRef} style={{ display: 'flex' }}>
        {items.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
          />
        ))}
      </div>
      <button onClick={() => {speed = 10; setData(d => d + 1 )}}>Contador {data}</button>
    </div>
  );
};

export default BannerCarousel;
