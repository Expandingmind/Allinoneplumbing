"use client";

interface ScrollToQuoteButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollToQuoteButton({ children, className }: ScrollToQuoteButtonProps) {
  const handleClick = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
