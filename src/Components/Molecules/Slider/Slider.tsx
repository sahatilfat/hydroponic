import React, { useLayoutEffect, useRef } from 'react';
import styles from './Slider.module.scss';
import CardWithDescription from '../CardWithDescription/CardWithDescription';

const Slider = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef(3); // simpan index aktif di ref

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    itemsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    loadShow();
  }, []);

  const loadShow = () => {
    let active = activeRef.current;
    let stt = 0;

    itemsRef.current[active]!.style.transform = `none`;
    itemsRef.current[active]!.style.zIndex = `${5}`;
    itemsRef.current[active]!.style.filter = `none`;
    itemsRef.current[active]!.style.opacity = `1`;

    // elemen setelah active
    for (let i = active + 1; i < itemsRef.current.length; i++) {
      stt++;
      if (itemsRef.current[i]) {
        itemsRef.current[i]!.style.transform = `translateX(${
          120 * stt
        }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        itemsRef.current[i]!.style.filter = `blur(5px)`;
        itemsRef.current[i]!.style.opacity = `${stt > 2 ? 0 : 0.6}`;
      }
    }

    stt = 0;

    // elemen sebelum active
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      if (itemsRef.current[i]) {
        itemsRef.current[i]!.style.transform = `translateX(${
          -120 * stt
        }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        itemsRef.current[i]!.style.filter = `blur(5px)`;
        itemsRef.current[i]!.style.opacity = `${stt > 2 ? 0 : 0.6}`;
      }
    }

    // elemen active
    if (itemsRef.current[active]) {
      itemsRef.current[active]!.style.transform = `translateX(0px) scale(1)`;
    }
  };

  const nextOnClick = () => {
    if (activeRef.current + 1 < itemsRef.current.length) {
      activeRef.current += 1;
      loadShow();
    }
  };

  const prevOnClick = () => {
    if (activeRef.current - 1 >= 0) {
      activeRef.current -= 1;
      loadShow();
    }
  };

  return (
    <div className={styles['slider']}>
      {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
        <div key={i} className={styles['item']} ref={(el) => setItemRef(el, i)}>
          {/* <h1>Slide {num}</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit... */}
          <img src="/assets/image/melon-slice.png" alt="" />
        </div>
      ))}

      <button className={styles['next']} onClick={nextOnClick}>
        next
      </button>
      <button className={styles['prev']} onClick={prevOnClick}>
        prev
      </button>
    </div>
  );
};

export default Slider;
