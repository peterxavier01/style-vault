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
  return (
    <div className="flex items-center gap-4">
      <span
        ref={prevRef}
        className="border-primary border-[1px] text-primary active:scale-95 hover:bg-primary hover:text-white transition rounded-full p-3"
      >
        <MdKeyboardArrowLeft size={15} className="slide-icons" />
      </span>
      <span
        ref={nextRef}
        className="border-primary border-[1px] text-primary hover:bg-primary active:scale-95 hover:text-white transition rounded-full p-3"
      >
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
      <div className="flex items-center justify-between mb-8">
        <Header title={title} />
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
          className="w-full"
        >
          <div>{children}</div>
        </Swiper>
      </>
    </>
  );
};

export default SlideContainer;
