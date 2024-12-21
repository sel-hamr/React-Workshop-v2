import { cn } from "@/lib/utils";
import Link from "next/link";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={cn(
        "flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]",
        className
      )}
    >
      <main className="flex flex-col gap-4 row-start-2 items-start max-w-screen-xl w-full">
        {children}
      </main>
    </div>
  );
};

Section.Back = () => {
  return (
    <Link
      href="/"
      className="text-sm text-gray-950 font-semibold hover:underline"
    >
      ← Back to home
    </Link>
  );
};

Section.Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-4xl text-center sm:text-left font-bold">{children}</h1>
  );
};

Section.Description = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-sm">{children}</div>;
};

Section.container = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex flex-col row-start-1 items-start">
      {children}
    </header>
  );
};

Section.Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full justify-center flex gap-3 items-baseline flex-wrap">
      {children}
    </div>
  );
};

Section.Code = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};
export default Section;
