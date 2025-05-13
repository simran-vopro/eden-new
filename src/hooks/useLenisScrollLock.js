// hooks/useLenisScrollLock.js
import { useEffect } from 'react';

export default function useLenisScrollLock(isLocked, lenis) {
  // useEffect(() => {
  //   if (!lenis) return;

  //   if (isLocked) {
  //     lenis.stop();
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     lenis.start();
  //     document.body.style.overflow = 'unset';
  //   }

  //   return () => {
  //     // Cleanup on unmount
  //     document.body.style.overflow = 'unset';
  //     lenis.start?.();
  //   };
  // }, [isLocked, lenis]);
}
