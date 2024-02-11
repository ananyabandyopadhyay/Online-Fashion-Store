import React from "react";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      Copyright© {currentYear} Ananya Bandyopadhyay All rights reserved.
    </footer>
  );
}

export default Footer;
