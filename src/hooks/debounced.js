import { useState, useEffect } from "react";

export const useDebounced = value => {
  const [debounced, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return debounced;
};

export default useDebounced;
