'use client';

import { motion } from 'framer-motion';
import { whatsappLink } from '@/lib/content';

/** Floating glass WhatsApp button — bottom-right, pre-filled message. */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      style={{
        position: 'fixed',
        right: 'max(20px, env(safe-area-inset-right))',
        bottom: 'max(20px, env(safe-area-inset-bottom))',
        zIndex: 150,
        width: 60,
        height: 60,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(37,211,102,0.22)',
        backdropFilter: 'blur(14px) saturate(160%)',
        WebkitBackdropFilter: 'blur(14px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.35)',
        boxShadow: '0 16px 38px -12px rgba(37,211,102,0.7)',
        textDecoration: 'none',
      }}
    >
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 9,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#2AF598,#22C35E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 1.94.51 3.84 1.48 5.51L4.94 27l6.64-1.54a11 11 0 0 0 4.46.95h.01c6.08 0 11.02-4.94 11.02-11.02 0-2.94-1.15-5.71-3.23-7.79A10.95 10.95 0 0 0 16.04 4Zm0 20.18h-.01a9.15 9.15 0 0 1-4.66-1.28l-.33-.2-3.94.92.84-3.84-.22-.34a9.1 9.1 0 0 1-1.4-4.86c0-5.05 4.11-9.16 9.18-9.16 2.45 0 4.75.96 6.48 2.69a9.1 9.1 0 0 1 2.68 6.48c0 5.06-4.11 9.17-9.16 9.17Zm5.03-6.86c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.28-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.62-1.53-1.9-.16-.27-.02-.42.12-.56.13-.13.28-.32.41-.48.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01a1 1 0 0 0-.73.34c-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.53-.32Z" />
        </svg>
      </span>
    </motion.a>
  );
}
