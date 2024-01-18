import { useActiveSectionContext } from "@/context/Active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionView = (sectionName, threshold = 0.75) => {
  const { ref: observerRef, inView } = useInView({
    threshold
  }); //ref to attach the oberver APi with element and a value weather it is in view or not
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && new Date() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick,sectionName]);

  return [observerRef];
};

export default useSectionView;