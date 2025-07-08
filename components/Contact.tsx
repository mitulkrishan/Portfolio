"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "mitulkrishan03@gmail.com",
      link: "mailto: mitulkrishan03@gmail.com",
      bgColor: "bg-rose-100 dark:bg-gray-700",
      iconColor: "text-rose-600 dark:text-rose-300",
      hoverColor: "hover:text-rose-600 dark:hover:text-rose-300",
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/mitulkrishan",
      link: "https://github.com/mitulkrishan",
      bgColor: "bg-indigo-100 dark:bg-gray-700",
      iconColor: "text-indigo-500 dark:text-cyan-300",
      hoverColor: "hover:text-indigo-500 dark:hover:text-cyan-300",
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/mitulkrishan",
      link: "https://linkedin.com/in/mitulkrishan",
      bgColor: "bg-emerald-100 dark:bg-gray-700",
      iconColor: "text-emerald-400 dark:text-purple-500",
      hoverColor: "hover:text-emerald-400 dark:hover:text-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-dot-grid-light dark:bg-dot-grid-dark portfolio-bg-light portfolio-bg-dark"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Let us Connect
          </h2>
          <div className="w-20 h-1 bg-rose-600 dark:bg-rose-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am always open to discussing new opportunities, collaborations, or
            just having a conversation about data and technology.
          </p>
        </div>

        <div className="grid">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <i className={`${info.icon} ${info.iconColor}`}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className={`theme-transition text-gray-600 dark:text-gray-300 ${info.hoverColor}`}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="theme-transition bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="theme-transition bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="theme-transition bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="theme-transition bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="theme-transition bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full theme-transition bg-emerald-400 dark:bg-purple-500 hover:bg-emerald-500 dark:hover:bg-purple-600 text-white font-medium transform hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
