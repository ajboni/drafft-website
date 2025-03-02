import GetStartedCTA from "../cta/GetStartedCTA";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import Features from "../../data/features";

export default function HomepageFeatures({ maxFeatures }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const featurescontrol = useAnimation();
  let features = Features;

  useEffect(() => {
    if (isInView) {
      console.log("inview");
      featurescontrol.start("visible");
    }
  }, [isInView]);

  return (
    <div className="scroll-m-32" id="features">
      <motion.div
        variants={{
          visible: { opacity: 1, y: 10 },
          hidden: { opacity: 0, y: 0 },
        }}
        ref={ref}
        animate={featurescontrol}
        transition={{ delay: 0.1, duration: 1.5 }}
        initial="hidden"
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-primary-color-lightest">Streamline Game Development</h2>
          <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
            Everything you need to bring your game to{" "}
            <motion.span
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, -0.8, 0.8, -0.8, 0.8, 0], // Smaller horizontal movement
                rotate: [0, -0.3, 0.3, -0.3, 0.3, 0], // Less rotation
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3, // Speed of shake
                delay: 4,
                ease: "easeInOut",
              }}
              className="inline-block font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]"
            >
              life
            </motion.span>{" "}
            {/*             
                      <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
              
            </span> */}
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            From scripting and dialogue design to item databases and GDDs, our tools integrate seamlessly with your
            workflow. Collaborate in real-time, export in standard JSON, and customize your projects to fit any engine.
          </p>
        </div>
        <div className="mx-auto mt-16 mb-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mb-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.slice(0, maxFeatures).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  {feature.href ? (
                    <a href={feature.href} className="flex items-center gap-x-3">
                      <feature.icon aria-hidden="true" className="size-5 flex-none text-primary-color-lightest" />
                      <span className="text-white">{feature.name}</span>
                    </a>
                  ) : (
                    <>
                      <feature.icon aria-hidden="true" className="size-5 flex-none text-primary-color-lightest" />
                      <span className="text-white">{feature.name}</span>
                    </>
                  )}
                </dt>
                <dd className="mt-2 mx-0 flex flex-auto flex-col text-base/7 text-gray-300">
                  <div className="flex-auto">{feature.description}</div>
                  {feature.href && (
                    <div className="mt-4">
                      <a href={feature.href} className="text-sm/6 font-semibold text-primary-color-lightest">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  );
}
