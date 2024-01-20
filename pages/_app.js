import '@/styles/globals.css'
import bg from "@/public/bg.jpg"
import Image from 'next/image'

export default function App({ Component, pageProps }) {
  return (
<div className='!scroll-smooth'>
<Image src={bg} className='fixed h-screen w-full object-cover brightness-75 -z-20' />
<Component {...pageProps} />
</div>
  )
}
