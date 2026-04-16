import React from 'react';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_DATA } from '@/components/contact/ContactData';


export const metadata = {
  title: 'Contact Us | DentaCare',
  description: 'Reach out to DentaCare for the best dental services.',
};

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Contact Us</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Have questions or need to reach us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Left Side: info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            {CONTACT_DATA.map((info, idx) => (
              <ContactInfoCard key={idx} {...info} />
            ))}
          </div>

          {/* Right Side: form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactUs;