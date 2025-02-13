
import { Skills } from './Skills'
import { About } from './About'
import HeroSection from './Layout/HeroSection'

export const Inicio = () => {
    return (
        <div >
            <HeroSection />
            <About />
            <Skills />

            {/* <Proyectos /> */}
        </div>
    )
}
