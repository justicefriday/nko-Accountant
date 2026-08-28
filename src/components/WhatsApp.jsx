import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/12898036886?text=Hello,%20I%20would%20like%20to%20schedule%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
    >
      <FaWhatsapp className="text-white text-2xl sm:text-4xl" />
    </a>
  );
};

export default WhatsApp;