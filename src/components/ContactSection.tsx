import { useState, type FormEvent } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "../lib/util";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I am always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <ContactItem
                icon={<Mail className="h-6 w-6 text-primary" />}
                label="Email"
                value="quangdu.qn@gmail.com"
                href="mailto:quangdu.qn@gmail.com"
              />
              <ContactItem
                icon={<Phone className="h-6 w-6 text-primary" />}
                label="Phone"
                value="+61 434 190 574"
                href="tel:+61434190574"
              />
              <ContactItem
                icon={<MapPin className="h-6 w-6 text-primary" />}
                label="Location"
                value="Bankstown, NSW, Australia"
              />
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/daniel-vo-au" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField id="name" label="Your Name" type="text" required placeholder="Daniel Vo" />
              <InputField id="email" label="Your Email" type="email" required placeholder="daniel@gmail.com" />
              <TextAreaField id="message" label="Your Message" required placeholder="Hello, I would like to..." />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Subcomponents

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium">{label}</h4>
      {href ? (
        <a
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
};

const InputField = ({ id, label, type, required, placeholder }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
    />
  </div>
);

type TextAreaFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
};

const TextAreaField = ({ id, label, required, placeholder }: TextAreaFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
    />
  </div>
);
