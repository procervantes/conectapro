import React from 'react'
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { useInView } from "react-intersection-observer"
import emailjs from "@emailjs/browser"

const LandingConPitch = () => {
  return (
    <div>
      <Helmet>
        <title>ConectaApp</title>
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card>
          <h1>Bienvenido a ConectaApp</h1>
          <Button>Contáctanos</Button>
        </Card>
      </motion.div>
    </div>
  )
}

export default LandingConPitch
