"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border dark:border-white border-black bg-transparent shadow-sm hover:bg-white/20 dark:hover:bg-white/20 dark:hover:text-white/40 hover:text-black/60",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-black/40 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        rippleButton:
          "relative overflow-hidden dark:bg-white bg-black text-white dark:text-black transition duration-300", // New rippleButton variant
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const RippleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "rippleButton", size, asChild = false, ...props },
    ref
  ) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;

      if (button) {
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(button.clientWidth, button.clientHeight);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.position = "absolute";
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.background = "#555";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple-animation 0.6s linear";
        ripple.style.pointerEvents = "none";

        button.appendChild(ripple);

        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      }
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "relative overflow-hidden"
        )}
        ref={(el) => {
          if (typeof ref === "function") ref(el);
          buttonRef.current = el;
        }}
        onClick={(event) => {
          handleRipple(event);
          props.onClick?.(event);
        }}
        {...props}
      />
    );
  }
);
RippleButton.displayName = "RippleButton";

export { Button, RippleButton, buttonVariants };
