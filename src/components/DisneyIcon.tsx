
import React from 'react';

interface DisneyIconProps {
  className?: string;
}

const DisneyIcon = ({ className = "w-4 h-4" }: DisneyIconProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orelha esquerda do Mickey */}
      <circle cx="25" cy="25" r="18" />
      {/* Orelha direita do Mickey */}
      <circle cx="75" cy="25" r="18" />
      {/* Cabeça principal do Mickey */}
      <circle cx="50" cy="55" r="25" />
      {/* Detalhes internos para dar profundidade */}
      <circle cx="25" cy="25" r="12" fill="rgba(255,255,255,0.1)" />
      <circle cx="75" cy="25" r="12" fill="rgba(255,255,255,0.1)" />
      <circle cx="50" cy="55" r="18" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
};

export default DisneyIcon;
