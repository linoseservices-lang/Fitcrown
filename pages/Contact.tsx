
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-[#4B3621] p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-300 mb-12">Whether you're looking for partnership, training, or bulk products, our team is ready to assist.</p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="font-bold">Our Hub</div>
                  <div className="text-sm text-gray-400">Agric Villa, Alase Moniya, Ibadan, Nigeria</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="font-bold">Call Center</div>
                  <div className="text-sm text-gray-400">08064632156</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="font-bold">General Inquiry</div>
                  <div className="text-sm text-gray-400">info@fitcrown.org</div>
                </div>
              </div>
            </div>

            <div className="mt-20 h-48 rounded-xl bg-gray-600/30 relative overflow-hidden">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.464670077227!2d3.9038237!3d7.507623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d24959f6331%3A0x6d9f30e0717208e9!2sMoniya%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                className="w-full h-full border-0 grayscale opacity-60" 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12 lg:p-20">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#2D5A27] rounded-full flex items-center justify-center text-white">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-[#4B3621]">Message Received!</h2>
                <p className="text-gray-600 max-w-sm">Thank you for reaching out to FitCrown Enterprise. One of our agribusiness experts will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#2D5A27] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-[#4B3621] mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input required type="text" className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-[#2D5A27] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input required type="email" className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-[#2D5A27] transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                    <select className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-[#2D5A27] transition-colors bg-transparent">
                      <option>Partnership Inquiry</option>
                      <option>Training Registration</option>
                      <option>Bulk Product Order</option>
                      <option>Mentorship Request</option>
                      <option>General Support</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">How can we help?</label>
                    <textarea required rows={4} className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-[#2D5A27] transition-colors resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="px-12 py-4 bg-[#2D5A27] text-white font-bold rounded-xl shadow-lg hover:bg-[#1e3d1a] transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
