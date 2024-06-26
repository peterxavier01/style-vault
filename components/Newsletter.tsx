const Newsletter = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-primary w-full min-h-[350px] rounded-2xl grid place-items-center text-center p-4">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl text-white font-semibold leading-[50px]">
          Let&apos;s stay in touch
        </h2>
        <p className="text-gray-200 font-medium leading-7 mb-6 max-w-xl">
          Subscribe to our newsletter for exclusive offers and updates.
        </p>
        <form id="newsletter">
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Your e-mail"
              className="px-4 py-2 bg-slate-700 text-gray-100 rounded-l-lg w-full h-12 outline-none"
            />
            <button className="bg-white text-main-black font-semibold text-xs md:text-sm py-2 px-2 rounded-r-lg w-fit md:w-[250px] h-12">
              Get $10 Savings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
