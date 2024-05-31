"use client";

import { LegacyRef, useRef } from "react";

import SwiperCore from "swiper";
import { Navigation, A11y } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Header from "./Header";

interface NavArrowsProps {
  prevRef: LegacyRef<HTMLDivElement>;
  nextRef: LegacyRef<HTMLDivElement>;
}

const NavArrows: React.FC<NavArrowsProps> = ({ prevRef, nextRef }) => {
  const iconStyles =
    "border-primary dark:border-gray-300 border-[1px] text-primary dark:text-gray-300 active:scale-95 hover:bg-primary dark:hover:bg-gray-300 dark:hover:text-primary hover:text-white transition rounded-full p-3";

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <span ref={prevRef} className={iconStyles}>
        <MdKeyboardArrowLeft size={15} className="slide-icons" />
      </span>
      <span ref={nextRef} className={iconStyles}>
        <MdKeyboardArrowRight size={15} className="slide-icons" />
      </span>
    </div>
  );
};

interface SlideContainerProps {
  title: string;
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ title, children }) => {
  SwiperCore.use([Navigation]);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    if (typeof swiper.params.navigation !== "boolean") {
      const navigation = swiper.params.navigation!;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <Header title={title} className="text-2xl md:text-4xl" />
        <NavArrows prevRef={prevRef} nextRef={nextRef} />
      </div>
      <>
        <Swiper
          loop={true}
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={1.2}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={onBeforeInit}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <div>{children}</div>
        </Swiper>
      </>
    </>
  );
};

export default SlideContainer;
