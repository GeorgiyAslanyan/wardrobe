import './globals.css'

export const metadata = {
  title: '3d library',
  description: 'Iframe 3d library',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
