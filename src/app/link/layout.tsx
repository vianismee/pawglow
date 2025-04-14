import Headers from "./components/Headers";

export default function LinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Headers />
        <main className="px-3 py-3 overflow-clip w-[100%]">{children}</main>
      </body>
    </html>
  );
}
