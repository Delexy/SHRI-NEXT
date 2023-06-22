import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ['400'] });

export const metadata = {
  title: "Билетопоиск",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} default-grid`}> 
      <Header></Header> 
        <main className="content-wrapper">
          {children}
        </main>
      <Footer></Footer>
      <div id="modals-contianer"></div>
      <div id="dropdowns-container"></div>
      </body>
    </html>
  );
}

