import "../globals.css";
import "@/styles/css/custom.css";
import "@/styles/css/style.css";
import { Suspense } from "react";
import Loading from "./Loading";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: " Simplifi Networks",
  description:
    "The Master Distributor for networking and communications equipment for East and Central Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="template-color-1">
        <div className="main-wrapper">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
