const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 mt-8 border-t border-gray-600">
    <p className="text-center text-sm tracking-wide">
      &copy; 2024 BISMILLAH. All rights reserved.
    </p>
    <div className="mt-4 flex justify-center flex-wrap gap-6">
      <a
        href="/privacy-policy"
        className="text-white hover:underline text-sm"
      >
        Privacy Policy
      </a>
      <a
        href="/terms-of-service"
        className="text-white hover:underline text-sm"
      >
        Terms of Service
      </a>
    </div>
  </footer>
);

export default Footer;
