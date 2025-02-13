
import { Skills } from './Skills'
import { Proyectos } from './Proyectos'
import { About } from './About'
import HeroSection from './Layout/HeroSection'

export const Inicio = () => {
    return (
        <div >
            <HeroSection />
            <About />
            <Skills />

            <Proyectos />
        </div>
    )
}
