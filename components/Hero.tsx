const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-overlay bg-opacity-50" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Elevate Your Wardrobe with Our Premium Shirts
          </h1>
          <p className="py-6">
            Discover the Perfect Fit and Style for Every Occasion
          </p>
          <button className="btn btn-primary" title="Shop Shirts Now">
            Shop Shirts Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
