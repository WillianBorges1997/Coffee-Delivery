import './globals.css';
import type { Metadata } from 'next';
import { Roboto,Baloo_2} from 'next/font/google';



const rbt400 =   Roboto({ subsets: ['latin'], weight: '400' })
const rbt700 =   Roboto({ subsets: ['latin'], weight: '700' })
const bloo700 =   Baloo_2({ subsets: ['latin'], weight: '700'})
const bloo800 =   Baloo_2({ subsets: ['latin'], weight: '800'})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={rbt400.className}>{children} 
    
      
      </body>
    </html>
  )
}
