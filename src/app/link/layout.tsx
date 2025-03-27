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
        <main>{children}</main>
      </body>
    </html>
  );
}
