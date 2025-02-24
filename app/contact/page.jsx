"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import PageTitle from "@/components/common/PageTitle";
import AnimatedContainer from "@/components/common/AnimatedContainer";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_NOTIFICATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID;
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setStatus("");
    
    try {
      const notificationParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        message: formData.message
      };

      const autoReplyParams = {
        to_name: formData.user_name,
        to_email: formData.user_email
      };

      const [notificationResult, autoReplyResult] = await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_NOTIFICATION_TEMPLATE_ID,
          notificationParams,
          EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTO_REPLY_TEMPLATE_ID,
          autoReplyParams,
          EMAILJS_PUBLIC_KEY
        )
      ]);

      if (notificationResult.status === 200 && autoReplyResult.status === 200) {
        setStatus("success");
        setFormData({ user_name: "", user_email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full flex items-start justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedContainer>
          <div className="w-full max-w-[1440px] mx-auto">
            <PageTitle 
              title="Contact" 
              subtitle="Let's Get in Touch" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-2xl mx-auto bg-neutral-900/50 p-6 rounded-xl border border-neutral-800"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none text-accent group-focus-within:text-[#00ff99] transition-colors">
                      <FiUser className="h-5 w-5" />
                    </div>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="block w-full pl-12 pr-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800/50 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00ff99] focus:ring-1 focus:ring-[#00ff99] transition-all [-webkit-autofill:focus]:[-webkit-text-fill-color:white] [-webkit-autofill]:[-webkit-text-fill-color:white] [-webkit-autofill]:[-webkit-box-shadow:0_0_0_30px_rgb(38_38_38)_inset]"
                    />
                  </div>

                  <div className="relative group">
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none text-accent group-focus-within:text-[#00ff99] transition-colors">
                      <FiMail className="h-5 w-5" />
                    </div>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="block w-full pl-12 pr-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800/50 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00ff99] focus:ring-1 focus:ring-[#00ff99] transition-all [-webkit-autofill:focus]:[-webkit-text-fill-color:white] [-webkit-autofill]:[-webkit-text-fill-color:white] [-webkit-autofill]:[-webkit-box-shadow:0_0_0_30px_rgb(38_38_38)_inset]"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-5 left-4 pointer-events-none text-accent group-focus-within:text-[#00ff99] transition-colors">
                    <FiMessageSquare className="h-5 w-5" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="block w-full pl-12 pr-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800/50 text-white placeholder-neutral-500 focus:outline-none focus:border-[#00ff99] focus:ring-1 focus:ring-[#00ff99] transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 flex items-center justify-center gap-2 text-base font-medium rounded-lg text-neutral-900 bg-[#00ff99] hover:bg-[#00ff99]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00ff99] focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-lg bg-[#00ff99]/10 border border-[#00ff99]/20 text-[#00ff99] text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-center"
                  >
                    An error occurred. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Contact;
