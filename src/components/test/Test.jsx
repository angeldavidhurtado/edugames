import { useEffect, useRef, useState } from 'react';

function Test() {
  let speed = 50 / 1000; // <- No es useRef
  const positionX = useRef(0);
  const lastTime = useRef(performance.now());
  const rafId = useRef(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const animate = (time) => {
      const delta = time - lastTime.current;
      lastTime.current = time;
      positionX.current += speed * delta; // <- Capturó el valor viejo de speed
      document.getElementById('box').style.transform = `translateX(${positionX.current}px)`;
      rafId.current = requestAnimationFrame(animate);
    };

    if (running) {
      rafId.current = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(rafId.current);
  }, [running]); // Solo depende de running

  const slowDown = () => {
    speed = 5 / 1000; // Queremos hacer que la velocidad sea más lenta
    console.log('Speed cambiado a lento');
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <button onClick={slowDown}>Hacer más lento</button>
      <div id="box" style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        position: 'absolute',
        top: '100px',
        left: '0px'
      }} />
    </div>
  );
}

export default Test
