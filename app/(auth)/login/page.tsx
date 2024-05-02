import Image from "next/image";

import PageComponent from "./_components/PageComponent";

export default async function LoginPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto mb-8">
      <div className="order-2 md:order-1">
        <Image
          src="/login.svg"
          width={500}
          height={500}
          alt="login illustration"
        />
      </div>

      <PageComponent />
    </section>
  );
}
