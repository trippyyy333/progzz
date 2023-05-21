import { motion } from "framer-motion";

import { styles } from "/home/q/Downloads/progz2/notscholing/Django-Auth-And-Perms-main/web3d_2/src/styles.js";
import { staggerContainer } from "/home/q/Downloads/progz2/notscholing/Django-Auth-And-Perms-main/web3d_2/src/utils/motion.js";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;