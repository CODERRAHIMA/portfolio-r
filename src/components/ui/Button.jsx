import React from 'react';
import Link from 'next/link';

export const Button = ({
  href,
  variant = 'primary',
  size = 'md',
  isExternal = false,
  download,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer max-w-full text-center';

  const sizeStyles = {
    sm: 'text-[11px] sm:text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 gap-1.5 sm:gap-2',
    md: 'text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 gap-2 shadow-xs',
    lg: 'text-sm sm:text-base px-5 py-2.5 sm:px-7 sm:py-3.5 gap-2.5 shadow-sm',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#9F1239] to-[#BE185D] hover:from-[#881337] hover:to-[#9F1239] text-white shadow-rose-900/10 hover:shadow-md hover:shadow-rose-900/20 hover:-translate-y-0.5',
    secondary:
      'bg-[#FFF0F3] hover:bg-[#FFE1E7] text-[#9F1239] border border-rose-200/90 hover:border-rose-300 hover:-translate-y-0.5',
    outline:
      'bg-transparent hover:bg-rose-50/60 text-[#2C272A] border border-[#E6D9DC] hover:border-rose-300 hover:text-rose-900',
    ghost:
      'bg-transparent hover:bg-rose-50/70 text-[#4B4449] hover:text-[#9F1239]',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const gapMap = {
    sm: 'gap-1.5 sm:gap-2',
    md: 'gap-2',
    lg: 'gap-2.5',
  };

  const content = (
    <span className={`flex items-center justify-center ${gapMap[size]} min-w-0 max-w-full flex-wrap sm:flex-nowrap`}>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 flex items-center justify-center w-[1.25em] h-[1.25em]">
          {icon}
        </span>
      )}
      <span className="truncate max-w-full inline-block leading-normal">
        {children}
      </span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 flex items-center justify-center w-[1.25em] h-[1.25em]">
          {icon}
        </span>
      )}
    </span>
  );

  if (href) {
    if (isExternal || download) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          download={download === true ? '' : download}
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
