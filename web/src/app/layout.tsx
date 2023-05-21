import '..style/globals.css'


export const metadata = {
  title: 'AllStack',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body >{children}</body>
    </html>
  )
}
