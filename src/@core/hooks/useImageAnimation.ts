// 'use client';

// import { useEffect, useRef, useState } from 'react';

// type Direction = 'left' | 'right' | 'top' | 'bottom';

// interface UseImageRevealOptions {
//   direction?: Direction;
//   delay?: number;
// }

// const useImageReveal = ({
//   direction = 'left',
//   delay = 0,
// }: UseImageRevealOptions = {}) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.4 }
//     );

//     observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, []);

//   const directionMap: Record<Direction, string> = {
//     left: '-translate-x-16',
//     right: 'translate-x-16',
//     top: '-translate-y-16',
//     bottom: 'translate-y-16',
//   };

//   return {
//     ref,
//     className: `
//       transition-all duration-700 ease-out
//       ${delay ? `delay-[${delay}ms]` : ''}
//       ${
//         visible
//           ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
//           : `opacity-0 ${directionMap[direction]} scale-90`
//       }
//       hover:scale-[1.03] hover:-translate-y-1
//     `,
//   };
// };

// export default useImageReveal;

'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface UseImageRevealOptions {
  direction?: Direction;
  delay?: number;
}

const useImageReveal = ({
  direction = 'left',
  delay = 0,
}: UseImageRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once (IMPORTANT)
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const directionMap: Record<Direction, string> = {
    left: '-translate-x-6',
    right: 'translate-x-6',
    top: '-translate-y-6',
    bottom: 'translate-y-6',
  };

  return {
    ref,
    className: `
      transition-opacity transition-transform
      duration-[900ms]
      ease-[cubic-bezier(0.22,1,0.36,1)]
      ${delay ? `delay-[${delay}ms]` : ''}
      ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionMap[direction]}`
      }
    `,
  };
};

export default useImageReveal;
