import { useEffect, useRef } from "react";

export const usePrevious = <T extends {}>(value: T) => {
  const ref = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  return ref.current;
};
