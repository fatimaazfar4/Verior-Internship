function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} CineScope. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
