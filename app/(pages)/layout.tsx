import "../globals.css"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Car Hub",
  description: "World's car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='relative overflow-x-hidden'>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
