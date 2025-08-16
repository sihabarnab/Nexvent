import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-[#1a1b1d] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Brand / Logo */}
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Nextvent"
              width={135}
              height={135}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-400 font-medium">
          <li>
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
