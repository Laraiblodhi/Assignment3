import Image from "next/image";
import logoicon from "@/app/assets/LogoIcon.png";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#043873] text-white">
      <header className="flex justify-between items-center px-[120px] py-4 bg-[#043873]">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src={logoicon} alt="Logo Icon" width={34} height={34} />
          <Image src={logo} alt="Logo" width={144} height={34} />
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400">
            Products
          </a>
          <a href="#" className="hover:text-gray-400">
            Solutions
          </a>
          <a href="#" className="hover:text-gray-400">
            Resources
          </a>
          <a href="#" className="hover:text-gray-400">
            Pricing
          </a>
          <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded hover:text-yellow-200">
            Login
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
