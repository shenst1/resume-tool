type FleurDeLisMarkProps = {
  size?: number;
  className?: string;
};

/**
 * Heraldic fleur-de-lis mark — reads cleanly from favicon size up to app icons.
 */
export function FleurDeLisMark({ size = 32, className }: FleurDeLisMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#0c0f0d" height="32" rx="7" width="32" />
      <path
        d="M16 4.5c0 0-1.2 3.8-1.2 6.4a3.6 3.6 0 0 0 1.2 2.9V4.5Z"
        fill="#7cb87a"
      />
      <path
        d="M16 4.5c0 0 1.2 3.8 1.2 6.4a3.6 3.6 0 0 1-1.2 2.9V4.5Z"
        fill="#7cb87a"
      />
      <path
        d="M9.5 12.2c0 0 2.1 1.8 3.6 2.9-1.1.9-1.9 2-2.4 3.4-.5 1.5-.7 3-.7 4.7h2.1c.2-1.8.7-3.4 1.8-4.7-1.8-1.2-4.4-3.5-4.4-6.3Z"
        fill="#7cb87a"
      />
      <path
        d="M22.5 12.2c0 0-2.1 1.8-3.6 2.9 1.1.9 1.9 2 2.4 3.4.5 1.5.7 3 .7 4.7h-2.1c-.2-1.8-.7-3.4-1.8-4.7 1.8-1.2 4.4-3.5 4.4-6.3Z"
        fill="#7cb87a"
      />
      <path d="M16 14.1v6.8l-2.8 4.6h5.6L16 20.9v-6.8Z" fill="#7cb87a" />
      <path
        d="M12.8 25.8c0 1.4 1.4 2.4 3.2 2.4s3.2-1 3.2-2.4c0-1.1-1.2-2-3.2-2s-3.2.9-3.2 2Z"
        fill="#9ed09c"
      />
      <circle cx="16" cy="13.8" fill="#d4a574" r="1.1" />
    </svg>
  );
}
