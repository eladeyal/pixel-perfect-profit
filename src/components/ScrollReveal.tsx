
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 800,
  once = true,
  className = "",
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once && element) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [once, threshold]);

  let transform = '';
  switch (direction) {
    case 'up':
      transform = `translateY(${isRevealed ? 0 : distance}px)`;
      break;
    case 'down':
      transform = `translateY(${isRevealed ? 0 : -distance}px)`;
      break;
    case 'left':
      transform = `translateX(${isRevealed ? 0 : distance}px)`;
      break;
    case 'right':
      transform = `translateX(${isRevealed ? 0 : -distance}px)`;
      break;
    default:
      transform = `translateY(${isRevealed ? 0 : distance}px)`;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform,
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
