import {
  SiGmail,
  SiLinkedin,
  SiGithub,
} from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

const contactItems = [
  {
    Icon: SiGmail,
    label: 'Email',
    value: 'nara.laorpun@gmail.com',
    color: '#D14836',
  },
  {
    Icon: SiLinkedin,
    label: 'LinkedIn',
    value: '/in/naralaorp',
    color: '#0077B5',
  },
  {
    Icon: SiGithub,
    label: 'GitHub',
    value: 'Chokun67',
    color: '#FFFFFF',
  },
  {
    Icon: BsTelephoneFill,
    label: 'Phone',
    value: '+66 87 702 4156',
    color: '#0EA5E9',
  },
];

const ContactSection = () => (
  <section
    id="contact"
    className=" py-20 px-4 sm:px-6 md:px-12 lg:px-22 bg-gradient-to-br bg-slate-800/40"
  >
    <div className="mx-auto max-w-screen-lg lg:max-w-screen-xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Touch
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg">
          Let&apos;s discuss your next project or just say hello!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* LEFT: Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-6">
            {contactItems.map(({ Icon, label, value, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-lg border border-slate-700 bg-gradient-to-r from-slate-800/60 to-slate-900/60 p-5 hover:border-purple-500 transition-all"
              >
                <Icon size={28} className="shrink-0" style={{ color }} />
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-gray-300">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-8 backdrop-blur-md shadow-lg shadow-purple-900/10">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle form submit
            }}
            className="space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                className="w-full rounded-md bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:ring-0"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:ring-0"
              />
            </div>
            <input
              required
              placeholder="Subject"
              className="w-full rounded-md bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:ring-0"
            />
            <textarea
              required
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-md bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-purple-500 focus:ring-0 resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Send Message <IoMdSend size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
