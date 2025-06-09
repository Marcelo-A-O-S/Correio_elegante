import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
export const ButtonAccount = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ className, children, ...props }, ref) => (
    <button
        ref={ref}
        className={clsx("w-full border-2 h-10 rounded-2xl", className)}
    >
    {children}
    </button>
))