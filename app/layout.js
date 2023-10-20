import './globals.css'

export const metadata = {
  title: '3d',
  description: '3d wardrobe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
