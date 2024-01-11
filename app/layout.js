import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nasir Hussain Personal Portfolio',
  description: 'Nasir Hussain is a Full Stack Developer with 3+ years of experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
      <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.24rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.24rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl-left[-15rem] 2xl:left-[-5rem]'></div>
      {children}
      </body>
    </html>
  )
}
