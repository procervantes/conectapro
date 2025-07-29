import React from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';

export default function LandingConPitch() {
  return (
    <div>
      <Helmet><title>ConectaPro</title></Helmet>
      <h1>Bienvenido a ConectaPro</h1>
      <Button>Explorar</Button>
    </div>
  );
}