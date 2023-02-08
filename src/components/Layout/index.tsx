import SideBar from "./SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex">
          <div className="h-screen max-w-xs overflow-y-auto bg-[#202123] md:min-w-[20rem]">
            <SideBar />
          </div>
          <div className="flex-1 bg-black">{children}</div>
        </div>
      </body>
    </html>
  );
}
