import { useEffect, useRef } from "react";

// Tracks the cursor and paints a soft radial glow that follows it.
// Mutates the DOM directly (not React state) so it doesn't trigger
// a re-render on every mousemove event — keeps it butter smooth.
const MouseGlow = ({
  color = "rgba(34, 211, 238, 0.12)",
  size = 500,
}) => {
  const glowRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const frameId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Simple lerp for a slightly trailing, organic feel
      // rather than the glow snapping instantly to the cursor.
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      frameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 z-0 pointer-events-none will-change-transform"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  );
};

export default MouseGlow;