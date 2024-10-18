import react from "react";

export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-left mb-2">Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2">Message</label>
              <textarea className="w-full p-3 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Send</button>
          </form>
        </div>
      </section>
    );
  }
  