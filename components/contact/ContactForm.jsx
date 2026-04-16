"use client";
import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Success! We'll get back to you soon.");
          e.target.reset();
        },
        (error) => {
          alert("Error sending message. Please try again.");
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <Input
              name="name"
              placeholder="John Doe"
              required
              className="bg-slate-50 dark:bg-slate-800  h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-slate-50 dark:bg-slate-800  h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone</label>
            <Input
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="bg-slate-50 dark:bg-slate-800  h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              name="message"
              placeholder="How can we help?"
              required
              className="bg-slate-50 dark:bg-slate-800  min-h-[120px]"
            />
          </div>
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-medium gap-2">
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-4 h-4" /> Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
