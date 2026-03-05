import clsx from "clsx";

type SocialMediaProps = {
  className?: string;
  invert?: boolean;
};

export function SocialMedia({ className, invert = false }: SocialMediaProps) {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-gray-900",
        className
      )}
    />
  );
}
