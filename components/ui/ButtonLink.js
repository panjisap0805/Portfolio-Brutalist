import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}) {
  const cls = `btn-mech ${variant === "ghost" ? "btn-mech--ghost" : ""} ${
    variant === "paper" ? "btn-mech--paper" : ""
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
