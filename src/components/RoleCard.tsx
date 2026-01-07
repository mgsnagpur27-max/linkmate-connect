import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface RoleCardProps {
  to: string;
  title: string;
  description: string;
  icon: ReactNode;
  variant: "student" | "owner";
}

const RoleCard = ({ to, title, description, icon, variant }: RoleCardProps) => {
  return (
    <Link
      to={to}
      className={`
        group relative flex flex-col items-center justify-center
        w-full max-w-md p-10 rounded-2xl
        bg-card shadow-card
        border border-border/50
        transition-all duration-500 ease-out
        hover:shadow-card-hover hover:-translate-y-2
        hover:border-primary/20
        overflow-hidden
      `}
    >
      {/* Background gradient overlay on hover */}
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          ${variant === "student" ? "bg-gradient-student" : "bg-gradient-owner"}
        `}
        style={{ opacity: 0 }}
      />
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-5
          transition-opacity duration-500
          ${variant === "student" ? "bg-gradient-student" : "bg-gradient-owner"}
        `}
      />

      {/* Icon container */}
      <div
        className={`
          relative z-10 flex items-center justify-center
          w-20 h-20 mb-6 rounded-2xl
          transition-all duration-500
          ${variant === "student" ? "bg-gradient-student" : "bg-gradient-owner"}
          group-hover:scale-110 group-hover:shadow-lg
        `}
      >
        <span className="text-primary-foreground">{icon}</span>
      </div>

      {/* Text content */}
      <h2
        className={`
          relative z-10 text-2xl font-bold mb-3
          text-card-foreground
          transition-colors duration-300
        `}
      >
        {title}
      </h2>
      <p
        className={`
          relative z-10 text-center text-muted-foreground
          transition-colors duration-300
          max-w-xs
        `}
      >
        {description}
      </p>

      {/* Arrow indicator */}
      <div
        className={`
          relative z-10 mt-6
          flex items-center gap-2
          text-sm font-medium
          ${variant === "student" ? "text-primary" : "text-secondary"}
          opacity-0 translate-x-[-10px]
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300 delay-100
        `}
      >
        Get Started
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Link>
  );
};

export default RoleCard;
