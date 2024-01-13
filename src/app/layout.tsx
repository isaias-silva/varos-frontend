import "@/app/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className=" bg-base">{children}</body>
    </html>
  )
}
