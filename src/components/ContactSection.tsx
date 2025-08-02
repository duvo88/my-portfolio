import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Github,
} from "lucide-react";

import { cn } from "../lib/util";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current!,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY  
            )
            .then(() => {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I will get back to you soon.",
                });
                setIsSubmitting(false);
                formRef.current?.reset();
            })
            .catch(() => {
                toast({
                    title: "Sending failed",
                    description: "Please try again later or contact me directly.",
                });
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl text-start font-semibold mb-6">
                            Contact Information
                        </h3>

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

                        <div className="pt-8 text-start">
                            <h4 className="text-2xl font-semibold mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://linkedin.com/in/daniel-vo-au"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/duvo88"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <InputField
                                id="name"
                                name="name"
                                label="Your Name"
                                type="text"
                                required
                                placeholder="Daniel Vo"
                            />
                            <InputField
                                id="email"
                                name="email"
                                label="Your Email"
                                type="email"
                                required
                                placeholder="daniel@gmail.com"
                            />
                            <TextAreaField
                                id="message"
                                name="message"
                                label="Your Message"
                                required
                                placeholder="Hello, I would like to..."
                            />

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

// Components reused below
type ContactItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
};

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => (
    <div className="flex items-start space-x-4 text-left">
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
    name: string;
    label: string;
    type: string;
    required?: boolean;
    placeholder?: string;
};

const InputField = ({
    id,
    name,
    label,
    type,
    required,
    placeholder,
}: InputFieldProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium mb-2">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        />
    </div>
);

type TextAreaFieldProps = {
    id: string;
    name: string;
    label: string;
    required?: boolean;
    placeholder?: string;
};

const TextAreaField = ({
    id,
    name,
    label,
    required,
    placeholder,
}: TextAreaFieldProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium mb-2">
            {label}
        </label>
        <textarea
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
        />
    </div>
);
