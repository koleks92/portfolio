type PageProps = {
  style: "dark" | "light";
  children: React.ReactNode;
};

export default function Page({ style, children }: PageProps) {
  return (
    <div
      className={` ${
        style === "dark"
          ? "bg-dark-mid text-text-muted"
          : "bg-light text-text-on-light"
      }`}
    >
      <div className="flex flex-col justify-evenly items-center max-w-7xl h-screen mx-auto overflow-hidden">
        {children}
      </div>
    </div>
  );
}
