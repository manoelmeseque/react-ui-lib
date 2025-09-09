import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "tw-cursor-pointer tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-whitespace-nowrap tw-rounded-full tw-text-sm tw-font-bold tw-transition-all disabled:tw-bg-gray-300 disabled:tw-border-gray-300 disabled:tw-cursor-not-allowed disabled:tw-text-gray-600 [&_svg]:tw-pointer-events-none [&_svg:not([class*='tw-size-'])]:tw-size-4 tw-shrink-0 [&_svg]:tw-shrink-0 tw-outline-none focus-visible:tw-border-ring focus-visible:tw-ring-primary/50 focus-visible:tw-ring-[2px] aria-invalid:tw-ring-destructive/20 dark:aria-invalid:tw-ring-destructive/40 aria-invalid:tw-border-destructive",
  {
    variants: {
      variant: {
        default:
          "tw-bg-primary tw-text-white tw-shadow-xs hover:tw-bg-primary/90",
        secondary:
          "tw-border-2 tw-border-primary tw-text-primary tw-shadow-xs tw-transition-all hover:tw-bg-primary hover:tw-text-white",
        link: "tw-text-primary hover:tw-text-purple-700",
        outline:
          "tw-border tw-bg-background tw-shadow-xs hover:tw-bg-accent hover:tw-text-accent-foreground dark:tw-bg-input/30 dark:tw-border-input dark:hover:tw-bg-input/50",
        ghost:
          "hover:tw-bg-accent hover:tw-text-accent-foreground dark:hover:tw-bg-accent/50",
        destructive:
          "tw-bg-red-500 tw-text-white hover:tw-bg-red-600 focus-visible:tw-ring-red-500/50",
      },
      size: {
        default: "tw-h-8 tw-px-4 tw-py-2 has-[>svg]:tw-px-3",
        sm: "tw-h-8 tw-gap-1.5 tw-px-3 has-[>svg]:tw-px-2.5",
        lg: "tw-h-10 tw-px-6 tw-text-md has-[>svg]:tw-px-4",
        icon: "tw-size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
