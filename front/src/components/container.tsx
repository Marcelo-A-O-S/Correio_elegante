import Footer from "./footer"
import Navbar from "./navbar"
export default function Container({children}: {children: React.ReactNode}) {
 return(
 <>
 <Navbar/>
 {children}
 <Footer/>
 </>)
}