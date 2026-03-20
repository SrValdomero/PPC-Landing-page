import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  glow = false,
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-dark text-white hover:bg-brand-medium shadow-lg shadow-brand-dark/20 focus:ring-brand-medium',
    secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-200 focus:ring-primary-300',
    outline: 'border border-primary-200 text-primary-700 hover:bg-primary-50 hover:border-brand-dark/30 focus:ring-brand-dark/30',
    ghost: 'text-primary-600 hover:text-primary-900 hover:bg-primary-50 focus:ring-primary-200',
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Pulse glow effect */}
      {glow && variant === 'primary' && (
        <span className="absolute inset-0 rounded-xl bg-brand-dark/30 blur-xl animate-pulse-glow -z-10" />
      )}
      {children}
    </button>
  );
}
