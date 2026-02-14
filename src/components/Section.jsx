import { cn } from "@/lib/utils";

export const Section = ({
  className,
  id,
  children,
  fullWidth = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 md:px-6",
          !fullWidth && "max-w-7xl"
        )}
      >
        {children}
      </div>
    </section>
  );
};
