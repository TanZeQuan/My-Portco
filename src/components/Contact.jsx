import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📌 Email sending is currently disabled for debugging.");

    // Commented out EmailJS function to prevent sending emails
    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     formRef.current,
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     (response) => {
    //       console.log("✅ Success:", response);
    //       setStatus("✅ Message sent successfully!");
    //       setFormData({ from_name: "", email_id: "", message: "" });
    //     },
    //     (error) => {
    //       console.error("❌ Error:", error);
    //       setStatus("❌ Failed to send message. Please try again.");
    //     }
    //   );
  };

  return (
    <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-teal-600">
        <span className="mr-3">📧 Contact Me</span>
      </h1>
      <form ref={formRef} onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            required
          />

          <input
            type="email"
            name="email_id"
            placeholder="Your Email"
            value={formData.email_id}
            onChange={handleChange}
            className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none"
          required
        ></textarea>

        <button
          type="submit"
          className="rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600"
        >
          Send Message
        </button>

        {status && <p className="text-center text-lg font-semibold text-teal-600">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
