import './globals.css';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deletrea from './components/texto_animado/page';
import Navbar from './components/navbar/page';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alejandro Ponce Portfolio',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  
  
  return (
    
    <html lang="es">
      
      
      <body><div><h1 className="text-center text-white"><Deletrea escribe="Alejandro Ponce"/></h1> 
      <Navbar />
      {children}</div>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous"async></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossOrigin="anonymous"async></script>
  </body>
    </html>
  )
}
