import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Mail,
  User,
  MessageCircle,
  Send,
  SendHorizontal,
  MailCheck,
} from "lucide-react";
import GlassCard from "../components/GlassCard";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgzrdpe";

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-12 flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-10"
      >
        <SendHorizontal className="text-emerald-400 w-9 h-9" />
        <h2 className="text-4xl md:text-4xl font-bold text-white">
          Get in Touch
        </h2>
      </motion.div>

      {/* Form Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl"
      >
        <GlassCard className="md:p-10 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-3xl transition-all duration-300 shadow-lg">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 text-center text-white"
            >
              <MailCheck className="text-emerald-400 w-6 h-6 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-center">
                  Message Sent Successfully
                </h3>
                <p className="text-white/70 text-sm">
                  Thanks for reaching out! I’ll get back to you shortly.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-sky-400 hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 max-w-md mx-auto w-full"
            >
              <div className="relative">
                <User className="absolute left-4 top-3 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-2 rounded-full bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/50 backdrop-blur placeholder-white/30"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-3 text-white/40 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-2 rounded-full bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/50 backdrop-blur placeholder-white/30"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 text-white/40 w-5 h-5" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 rounded-3xl bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/50 backdrop-blur placeholder-white/30 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit mx-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-sky-700 cursor-not-allowed"
                    : "bg-sky-700 hover:bg-sky-600"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <Send className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
          )}
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default ContactSection;
