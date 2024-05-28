import React from "react";

export default function Loading() {
  return (
    <section className="max-w-[1440px] pt-12 pb-14 min-h-screen mx-auto px-4 md:px-8">
      <div className="skeleton w-40 h-4 mb-8" />
      <div className="flex items-center max-w-3xl mx-auto">
        <span className="skeleton rounded-full w-8 h-8 p-6" />
        <span className="skeleton w-full h-2 rounded-none" />
        <span className="skeleton rounded-full w-8 h-8 p-6" />
        <span className="skeleton w-full h-2 rounded-none" />
        <span className="skeleton rounded-full w-8 h-8 p-6" />
      </div>
    </section>
  );
}
