
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";
import { send } from "@emailjs/browser";

export default function LandingConPitch() {
  return (
    <>
      <Helmet>
        <title>ConectaPro</title>
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Bienvenido a ConectaPro</h1>
      </motion.div>
    </>
  );
}
