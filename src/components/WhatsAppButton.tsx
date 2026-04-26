import { WHATSAPP_URL } from "@/lib/constants";

interface WhatsAppButtonProps {
  variant?: "filled" | "inverted";
  children: React.ReactNode;
  className?: string;
}

export default function WhatsAppButton({
  variant = "filled",
  children,
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-block px-8 py-4 rounded-lg font-medium text-sm tracking-widest uppercase transition-transform duration-200 hover:scale-105";
  const variants = {
    filled: "bg-brand-light-blue text-white",
    inverted: "bg-white text-brand-black",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
