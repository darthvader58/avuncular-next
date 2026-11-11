'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';

type ScrollGalleryProps = {
  children: ReactNode;
  label: string;
};

/** Native scrolling keeps touch, trackpad and keyboard navigation available. */
export function ScrollGallery({ children, label }: ScrollGalleryProps) {
  const id = useId();
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });

  function updatePosition() {
    const element = track.current;
    if (!element) return;
    setPosition({
      start: element.scrollLeft <= 1,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 1,
    });
  }

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(element);
    updatePosition();
    return () => observer.disconnect();
  }, []);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * (element.clientWidth + gap),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <div className="scroll-gallery" role="region" aria-label={label} aria-roledescription="carousel">
      <div id={id} ref={track} className="scroll-gallery-track" tabIndex={0} onScroll={updatePosition} aria-label={`${label}, scroll sideways to explore`}>
        {children}
      </div>
      <div className="scroll-gallery-controls">
        <span>Scroll to explore all divisions</span>
        <div className="scroll-gallery-buttons">
          <button type="button" aria-label="Previous service divisions" aria-controls={id} disabled={position.start} onClick={() => move(-1)}>←</button>
          <button type="button" aria-label="Next service divisions" aria-controls={id} disabled={position.end} onClick={() => move(1)}>→</button>
        </div>
      </div>
    </div>
  );
}
