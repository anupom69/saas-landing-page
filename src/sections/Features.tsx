import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="flex items-center justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="max-w-2xl mx-auto text-6xl font-medium text-center mt-6">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            className="md:col-span-2 lg:col-span-1 group"
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing."
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image
                  src={avatar1}
                  className="rounded-full"
                  alt="Ashwin Santiago"
                />
              </Avatar>
              <Avatar className="z-30 -ml-6 border-indigo-500">
                <Image
                  src={avatar2}
                  className="rounded-full"
                  alt="Lula Meyers"
                />
              </Avatar>
              <Avatar className="z-10 -ml-6 border-amber-600/95">
                <Image
                  src={avatar3}
                  className="rounded-full"
                  alt="Florence Shaw"
                />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    className="absolute rounded-full size-full opacity-0 group-hover:opacity-100 transition"
                    src={avatar4}
                    alt="Avatar 4"
                  />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white inline-flex items-center"
                    />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 lg:col-span-1 group"
            title="Interactive Prototyping"
            description="Engage your audience with interactive prototypes."
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition text-center">
                We&apos;ve achieved{" "}
                <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <span>incredible</span>
                  <video
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </span>{" "}
                growth this year.
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
            title="Keyboard Quick Actions"
            description="Powerful keyboard shortcuts for faster navigation."
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28outline outline outline-2 outline-transparent  group-hover:outline-lime-400 outline-offset-4 group-hover:translate-y-1 tranistion duration-500">
                shift
              </Key>
              <Key className="outline outline-2 outline-transparent group-hover:outline-lime-400 outline-offset-4 group-hover:translate-y-1 tranistion duration-500 delay-150">
                alt
              </Key>
              <Key className="outline outline-2 outline-transparent group-hover:outline-lime-400 outline-offset-4 group-hover:translate-y-1 tranistion duration-500 delay-300">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 cursor-default border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:font-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
