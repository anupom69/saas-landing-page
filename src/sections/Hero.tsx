import Button from "@/components/Button";
import DesignExample1Image from "@/assets/images/design-example-1.png";
import DesignExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
export default function Hero() {
  return (
    <section className="py-24 overflow-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={DesignExample1Image} alt="Design Example 1"/>
        </div>
        <div className="absolute -right-64 top-16 hidden lg:block">
          <Image src={DesignExample2Image} alt="Design Example 2"/>
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Dippanita" color="blue" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Roy" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from bg-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          We are a team of designers and developers who are passionate about
          creating impactful design.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            className="bg-transparent px-4 md:flex-1 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <Button type="submit" variant="primary" size="sm" className="whitespace-nowrap">Sign Up</Button>
        </form>
      </div>
    </section>
  );
}
