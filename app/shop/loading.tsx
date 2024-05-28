import React from "react";

const Loading = () => {
  return (
    <section className="px-4 md:px-8 max-w-[1440px] mx-auto mb-8">
      <div className="skeleton rounded-2xl w-full min-h-[250px]"></div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-11">
        <div className="col-span-1">
          <h4 className="skeleton w-full h-4 mb-4" />
          <div className="flex flex-row sm:flex-col gap-3">
            <div className="skeleton w-full h-12" />
            <div className="skeleton w-full h-12" />
            <div className="skeleton w-full h-12" />
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <ul className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            <div className="skeleton h-80 w-full rounded-2xl" />
            <div className="skeleton h-80 w-full rounded-2xl" />
            <div className="skeleton h-80 w-full rounded-2xl" />
            <div className="skeleton h-80 w-full rounded-2xl" />
          </ul>

          <div className="skeleton rounded-lg w-full h-12 mt-12" />
        </div>
      </div>
    </section>
  );
};

export default Loading;
