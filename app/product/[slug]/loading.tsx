import React from "react";

const Loading = () => {
  return (
    <section className="max-w-[1440px] min-h-screen mx-auto px-4 md:px-8 mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="flex flex-col gap-4">
          <div className="skeleton w-full min-h-[400px] rounded-xl" />
          <div className="flex items-center gap-4 rounded-xl">
            <div className="skeleton w-[150px] h-[130px]"></div>
            <div className="skeleton w-[150px] h-[130px]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="skeleton navbar max-w-[200px] h-3"></div>
          <div className="skeleton w-full h-8"></div>
          <p className="skeleton w-full h-4" />

          <div className="skeleton w-full h-4" />
          <div className="flex items-center gap-2">
            <div className="skeleton w-6 h-6 rounded-full" />
            <div className="skeleton w-6 h-6 rounded-full" />
            <div className="skeleton w-6 h-6 rounded-full" />
          </div>

          <div className="skeleton w-full h-4 mb-2" />
          <div className="flex items-center gap-4">
            <div className="skeleton w-8 h-8 rounded-md" />
            <div className="skeleton w-8 h-8 rounded-md" />
            <div className="skeleton w-8 h-8 rounded-md" />
            <div className="skeleton w-8 h-8 rounded-md" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="skeleton max-w-[200px] h-3" />
            <p className="skeleton max-w-[300px] h-8" />
          </div>

          <div className="flex items-center gap-4">
            <div className="skeleton max-w-[300px] h-8" />
            <div className="skeleton max-w-[100px] h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
