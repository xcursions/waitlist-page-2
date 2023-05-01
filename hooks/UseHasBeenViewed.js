import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useHasBeenViewed = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: "all" })
    const prevInView = useRef(false);
    const hasBeenViewed = prevInView.current || isInView;
    useEffect(() => {
      prevInView.current = isInView;
    });
    
    return [hasBeenViewed, ref];
  }