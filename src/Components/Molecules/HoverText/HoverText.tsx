import React, { useRef, useState, useEffect } from 'react';
import styles from './HoverText.module.scss';

type IMagnifyText = {
  text?: string;
};

const MagnifyText: React.FC<IMagnifyText> = ({ text = 'hover me' }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [textElement, setTextElement] = useState<React.ReactElement | null>(
    null
  );

  useEffect(() => {
    if (textRef.current) {
      const clonedText = React.cloneElement(
        <p className={styles.magnifyText} />,
        {
          dangerouslySetInnerHTML: { __html: textRef.current.innerHTML },
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
          },
        }
      );
      setTextElement(clonedText);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition(null);
  };

  return (
    <div
      className={styles.magnifyWrapper}
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <p className={styles.magnifyText} ref={textRef}>
        {text}
      </p>

      {position && (
        <div
          className={styles.magnifier}
          style={{
            left: position.x,
            // Pindah 100px ke atas
            top: position.y - 70,
          }}
        >
          <span
            className={styles.magnifierContent}
            style={{
              // Sesuaikan posisi konten dengan radius baru (50px)
              left: -position.x * 1.5 + 50,
              top: -position.y * 1.5 + 50,
            }}
          >
            {textElement}
          </span>
        </div>
      )}
    </div>
  );
};

export default MagnifyText;
