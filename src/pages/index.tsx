import Image from 'next/image'
import { Inter } from 'next/font/google'

import Landing from '@/components/landing'
import Pagina from '@/components/template/Pagina'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Pagina>
      <Landing/>
    </Pagina>
  )
}
