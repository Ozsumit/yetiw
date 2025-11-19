import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link"; // Using Link for better navigation

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Yeti International College
            </h3>
            <p className="text-slate-300">
              Empowering minds. Shaping futures. Building leaders.
            </p>
          </div>

          {/* Column 2: Academic Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Academic</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/programs" className="hover:text-white transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-white transition"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-white transition">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Campus Life Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Campus Life</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/student-life"
                  className="hover:text-white transition"
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/athletics" className="hover:text-white transition">
                  Athletics
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="hover:text-white transition">
                  Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Buddhanagar, New Baneshwor, Kathmandu-10</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-5 h-5 flex-shrink-0" />
                <span>01-4792063, 9803323042, 9851314471</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 flex-shrink-0" />
                <span>info@yeticollege.edu.np</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Yeti International College. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
