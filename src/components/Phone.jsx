import React from 'react';

export default function Phone({ src, alt, className = '', loading = 'lazy', plain = false }) {
  return (
    <img
      src={src}
      alt={alt}
      width="800"
      height="1678"
      loading={loading}
      decoding="async"
      className={`block h-auto w-full select-none ${
        plain ? '' : 'drop-shadow-[0_26px_34px_rgba(15,23,42,0.28)]'
      } ${className}`}
    />
  );
}
