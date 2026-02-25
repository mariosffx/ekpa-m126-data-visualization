export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-gray-700 dark:text-gray-300">{children}</p>;
}

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
      {children}
    </h1>
  );
}
