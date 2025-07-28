import React from "react";

function Contact() {
  return (
    <div id="contact" className="bg-[url('/images/bg.svg')] bg-no-repeat bg-cover bg-center py-20 px-4">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold uppercase mb-4 text-black underline decoration-[#5b2bc4] underline-offset-8 decoration-2">
          Contact Me
        </h1>
        <br />
        <p className="text-xl text-gray-900 mb-6 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just
          to say hello — I'm always open to connecting!
        </p>
      </div>

      <div className="mx-auto w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-3 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Enter Message"
              className="w-full px-4 py-3 text-slate-800 bg-gray-100 border border-gray-200 rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-[#5b2bc4] hover:bg-[#4a20a5] transition-colors text-white px-8 py-3 rounded-md text-lg font-semibold inline-block"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
