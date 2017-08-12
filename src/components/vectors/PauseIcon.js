import React from 'react';

export default function PauseIcon(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 44 44" version="1.1" {...props} className="controls__icon--pause">
      <path d="M16,29L20,29L20,15L16,15L16,29ZM24,15L24,29L28,29L28,15L24,15Z" />
      <path d="M22,41C32.493,41 41,32.493 41,22C41,11.507 32.493,3 22,3C11.507,3 3,11.507 3,22C3,32.493 11.507,41 22,41ZM22,44C9.85,44 0,34.15 0,22C0,9.85 9.85,0 22,0C34.15,0 44,9.85 44,22C44,34.15 34.15,44 22,44Z" />
    </svg>
  );
}
