import HeaderBanner from "@/components/HeaderBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main >
        <HeaderBanner/>
        {children}
    </main>
  );
}
