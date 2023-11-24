import React from 'react';
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className="NewsletterCard">
        <h2>Be the First to Know </h2>
        <p>Subscribe to our health insight newsletter</p>
        <form>
            <input type="email" placeholder="Adresa ta de e-mail" />
            <button type="submit">Subscribe</button>
        </form>
      </div>
    );
  };
