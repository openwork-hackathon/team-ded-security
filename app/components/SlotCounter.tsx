'use client';

import React, { useState, useEffect } from 'react';

interface DigitProps {
  value: string;
}

const Digit = ({ value }: DigitProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  return (
    <span className="inline-block relative h-8 overflow-hidden w-[0.6em] text-center">
      <span
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {displayValue}
      </span>
      {isAnimating && (
        <span className="absolute inset-0 animate-slide-up text-red-400">
          {value}
        </span>
      )}
    </span>
  );
};

export default function SlotCounter({ value }: { value: number }) {
  const digits = value.toLocaleString().split('');

  return (
    <div className="flex items-center tracking-tighter">
      {digits.map((d, i) => (
        d === ',' || d === ' ' ? <span key={i} className="mx-1">{d}</span> : <Digit key={i} value={d} />
      ))}
    </div>
  );
}
