// src/index.ts
import { useCallback, useState, useEffect } from "react";
import { getRealShape } from "@heroui/react-utils";
function useRealShape(ref) {
  const [shape, setState] = useState({
    width: 0,
    height: 0
  });
  const updateShape = useCallback(() => {
    if (!(ref == null ? void 0 : ref.current)) return;
    const { width, height } = getRealShape(ref.current);
    setState({ width, height });
  }, []);
  useEffect(() => updateShape(), [updateShape]);
  return [shape, updateShape];
}
export {
  useRealShape
};
