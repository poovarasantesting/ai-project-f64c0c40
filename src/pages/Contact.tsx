import { ContactForm } from "@/components/ContactForm";
import { Toaster } from "@/components/ui/toaster";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Have a question or want to work together? Fill out the form below and we'll get back to you soon.
        </p>
      </div>
      
      <ContactForm />
      <Toaster />
    </div>
  );
}