import Image from "next/image";

interface JumbotronProps {
  header: string;
  subheader: string;
  src: string;
  alt: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  header,
  subheader,
  src,
  alt,
}) => {
  return (
    <div className="hero min-h-[380px] relative bg-base-200">
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="hero-overlay absolute bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl text-white font-semibold leading-[50px]">{header}</h1>
          <p className="text-base leading-8 text-slate-100 font-medium">{subheader}</p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
