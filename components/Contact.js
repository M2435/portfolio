"use client";

import { useState } from "react";
import { profile } from "../lib/data";
import { emailjsConfig } from "../lib/emailjsConfig";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const notConfigured =
      !emailjsConfig.serviceId.startsWith("service_") ||
      !emailjsConfig.templateId.startsWith("template_") ||
      emailjsConfig.publicKey === "YOUR_PUBLIC_KEY";

    if (notConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailjsConfig.serviceId,
          template_id: emailjsConfig.templateId,
          user_id: emailjsConfig.publicKey,
          template_params: {
            name: name,
            email: email,
            message: message,
            title: `Portfolio message from ${name}`,
          },
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="serif section-title">Contact</h2>
        <p className="section-lead">
          Have a role, a project, or just want to talk about AI/ML and backend
          engineering? Send a message, or reach out directly below.
        </p>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
              <path d="M4 4l8 8 8-8" />
            </svg>
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12c0-5.5-4.5-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your name" required disabled={status === "sending"} />
          <input type="email" name="email" placeholder="Your email" required disabled={status === "sending"} />
          <textarea name="message" placeholder="Your message" required disabled={status === "sending"} />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ justifySelf: "start" }}
            disabled={status === "sending"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="form-note">Message sent — thanks for reaching out, I'll reply soon.</p>
          )}
          {status === "error" && (
            <p className="form-note">
              Couldn't send that — check that lib/emailjsConfig.js has your real Service ID,
              Template ID, and Public Key from emailjs.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
