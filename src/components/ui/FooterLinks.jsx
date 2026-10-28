import React from 'react';

function FooterLinks({ href, level }) {
  return (
    <li className="group flex items-center">
      <span className="h-1 w-0 rounded-full bg-rose-700 opacity-0 transition-all duration-300 ease-out group-hover:w-2 group-hover:opacity-100 group-hover:mr-2"></span>
      
      <a 
        href={href} 
        className="relative inline-block transition-all duration-300 ease-out group-hover:translate-x-1"
      >
        {level}
        <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-rose-700 to-pink-600 transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
    </li>
  );
}

export default FooterLinks;
