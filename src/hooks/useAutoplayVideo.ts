import { useEffect } from "react";

export const useAutoplayVideo = (
  videoRef: React.RefObject<HTMLVideoElement>
) => {
  useEffect(() => {
    if (window.innerWidth > 480) {
      return;
    }
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement?.play().catch((error) => console.log(error));
          } else {
            videoElement?.pause();
            if (videoRef.current.currentTime) videoRef.current.currentTime = 0;
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [videoRef]);
};
