import { useEffect, useRef, useState } from "react";

// Parses a stat string like "150+", "98+", "24/7", or "99.9%" into a
// numeric portion to animate plus a prefix/suffix to keep static.
// Example: "150+" -> { prefix: "", number: 150, suffix: "+" }
//          "24/7" -> { prefix: "", number: 24, suffix: "/7" }
//          "99.9%" -> { prefix: "", number: 99.9, suffix: "%" }
const parseValue = (value) => {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    // No numeric portion found (shouldn't happen for stat values,
    // but fall back to displaying the raw string statically).
    return { prefix: "", number: null, suffix: value, decimals: 0 };
  }
  const [, prefix, numberStr, suffix] = match;
  const decimalPart = numberStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, number: parseFloat(numberStr), suffix, decimals };
};

const DURATION_MS = 1500;

const CountUpNumber = ({ value, className = "" }) => {
  const { prefix, number, suffix, decimals } = parseValue(value);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (number === null) return;

    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / DURATION_MS, 1);
            // Ease-out cubic for a natural deceleration toward the target.
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = number * eased;

            // Round to the same number of decimal places as the source
            // value (e.g. "99.9%" -> 1 decimal), so we get clean steps
            // like 0.0, 0.1, 0.2... instead of raw float noise.
            const factor = 10 ** decimals;
            const rounded = Math.round(current * factor) / factor;

            setDisplayValue(rounded);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplayValue(number);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number, hasAnimated, decimals]);

  if (number === null) {
    return (
      <p ref={elementRef} className={className}>
        {suffix}
      </p>
    );
  }

  return (
    <p ref={elementRef} className={className}>
      {prefix}
      {decimals > 0 ? displayValue.toFixed(decimals) : displayValue}
      {suffix}
    </p>
  );
};

export default CountUpNumber;