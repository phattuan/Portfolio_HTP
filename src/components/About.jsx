import React from "react";
import BorderTitle from "./BorderTitle";
import {
  motion,
  useScroll,
  Variants

} from 'framer-motion'

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }
const About = () => {
  const { scrollYProgress } = useScroll();
  const effectScroll = {
    hidden: {
      opacity: 0,
      transition: {
        duration: .5,

      }
    },
    show: {
      opacity: 1,
      transition: {
        duration: .5,

      }
    },

  }

  return (
    <div className="layout-about" id="about">
      {/* //=*=*=*=*= title =*=*=*=*= */}
      <BorderTitle title="about" icon="las la-user-secret" />

      {/* //=*=*=*=*= content =*=*=*=*= */}
      <div className="content-about">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

          className="content-title">
          Every great design begin with an even better story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="content">
          Since beginning my journey as a freelance designer nearly 2 years ago,
          I&apos;ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I&apos;m quietly confident, naturally
          curious, and perpetually working on improving my chopsone design
          problem at a time.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
