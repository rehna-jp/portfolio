import React, { useRef } from 'react';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Terminal, Send, User, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import FadeIn from './FadeIn';

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;
    console.log("Form submitted!");

    toast.loading('Sending message...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        console.log('Message sent!');
        toast.dismiss();
        toast.success('Message sent successfully! 🚀');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.dismiss();
        toast.error('Failed to send message 😔 Try again.');
      });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="text-[#7B61FF] text-xl" />,
      url: 'https://github.com/rehna-jp',
      color: 'hover:border-[#7B61FF]/50'
    },
    {
      name: 'LinkedIn',
      icon: <SlSocialLinkedin className="text-[#7B61FF] text-xl" />,
      url: 'https://www.linkedin.com/in/precious-jeremy-o-b195292ab',
      color: 'hover:border-[#0077b5]/50'
    },
    {
      name: 'Twitter (X)',
      icon: <BsTwitterX className="text-[#7B61FF] text-xl" />,
      url: 'https://x.com/chiinaza0x5',
      color: 'hover:border-[#1DA1F2]/50'
    },
    {
      name: 'Email',
      icon: <MdOutlineEmail className="text-[#7B61FF] text-2xl" />,
      url: 'mailto:jeremyrehna05@gmail.com',
      color: 'hover:border-[#EA4335]/50'
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 ">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(123, 97, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(123, 97, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 max-w-6xl">
        {/* Header */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
            <Terminal className="w-5 h-5 text-[#7B61FF]" />
            <span className="text-[#7B61FF] font-mono text-sm">~/get-in-touch</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Open to work, collaborations, internships or just vibing in tech. Feel free to reach out
            </p>
          </div>
        </FadeIn>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-8 hover:border-[#7B61FF]/30 transition-all duration-500">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-gray-500 font-mono">send-message.jsx</span>
              </div>

              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#7B61FF]" />
                Send me a message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#7B61FF]" />
                    Name
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#7B61FF] focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#7B61FF]" />
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="youremail@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#7B61FF] focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#7B61FF]" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#7B61FF] focus:outline-none focus:ring-2 focus:ring-[#7B61FF]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7B61FF] to-[#6366f1] hover:from-[#6b51ef] hover:to-[#5356e1] px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#7B61FF]/30 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.5}>
            <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-8 hover:border-[#7B61FF]/30 transition-all duration-500">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-gray-500 font-mono">social-links.jsx</span>
              </div>

              <h3 className="text-xl font-semibold mb-6">Connect with me</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 bg-black/50 border border-white/10 ${social.color} rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7B61FF]/10`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#7B61FF]/10 flex items-center justify-center group-hover:bg-[#7B61FF]/20 transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-[#7B61FF]/5 border border-[#7B61FF]/20 rounded-lg">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-[#7B61FF] font-mono">💡 Pro tip:</span> For quick questions, Twitter DMs are usually fastest!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer Note */}
        <FadeIn delay={0.7}>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Usually respond within 24-48 hours ⚡
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;