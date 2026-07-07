import Footer from "../general/Footer"
import Navbar from "../navbar/Navbar"

const ContainerLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="flex flex-col justify-center items-center">
        <Navbar/>
        <div className="flex flex-col justify-center items-center gap-5">
            {children}
        </div>
        <Footer/>
    </section>
  )
}

export default ContainerLayout