import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-light-yellow text-ink hover:bg-light-yellow/80 focus-visible:outline-ink/60",
  secondary: "bg-green text-white hover:bg-green-dark",
  outline:
    "border-2 border-azure text-azure bg-transparent hover:bg-azure-tint",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-heading text-button font-medium tracking-wide uppercase shadow-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type LinkButtonProps = CommonProps & {
  href: string;
  download?: boolean | string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const isExternal = /^https?:\/\//.test(rest.href);
    if (isExternal || rest.download) {
      return (
        <a
          className={classes}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={rest.href}
        className={classes}
        {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
