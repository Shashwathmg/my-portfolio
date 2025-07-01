"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/data";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpLarge,
  rotateYVariant,
} from "../data/variants";

const Contact = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form is disabled because no Web3Forms access key is set
    setStatus('Contact form is disabled. No access key provided.');
    setTimeout(() => {
      setStatus(null);
    }, 4000);
    return;
  }

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      className="bg-neutral-950 flex flex-col justify-center items-center text-neutral-100 py-16 px-6"
    >
      <motion.h4
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        className="text-[15px] text-center text-neutral-300 font-medium"
      >
        GET IN TOUCH
      </motion.h4>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-100"
      >
        Contact Me
      </motion.h2>
      <div className="w-full sm:max-w-2xl md:max-w-3xl border border-neutral-600 p-4 md:p-8 rounded-2xl shadow-md text-neutral-100">
        <div className="flex max-md:flex-col sm:w-xl md:w-2xl gap-4">
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.01 }}
          >
            <FiMail className="text-sm" /> {contactInfo.email}
          </motion.a>

          <motion.a
            href={`https://wa.me/${
              contactInfo.whatsappNumber
            }?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-600 rounded-lg font-medium"
            whileHover={{ scale: 1.01 }}
          >
            <FaWhatsapp className="text-sm" /> WhatsApp
          </motion.a>
        </div>

        <motion.p
          variants={fadeInUpLarge}
          initial="hidden"
          whileInView="visible"
          className="p-6 text-neutral-300 text-xs font-medium text-center"
        >
          Or send a message
        </motion.p>

        <motion.form className="w-full space-y-4" onSubmit={handleSubmit}>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            className="space-y-1"
          >
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none"
              required
              disabled
            />
          </motion.div>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
          >
            <motion.textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-900 border-neutral-600 rounded-lg focus:outline-none resize-none"
              required
              disabled
            />
          </motion.div>
          <motion.button
            type="submit"
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.01 }}
            className="w-full bg-neutral-950 cursor-not-allowed px-4 py-2 rounded-lg text-sm font-medium border border-neutral-600 flex justify-center opacity-60"
            disabled
          >
            Contact form disabled
          </motion.button>
        </motion.form>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-blue-600">
            {status}
          </p>
        )}
      </div>
    </motion.section>
  );
});

Contact.displayName = "Contact";
export default Contact;


