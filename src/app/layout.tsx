import "@/app/globals.css"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className=" bg-base">
        <Header />
        <div className=" w-full pt-14 text-white flex justify-around ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
