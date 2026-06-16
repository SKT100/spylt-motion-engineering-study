import FlavourTitle from "../components/FlavourTitle"
import FlavourSlider from "../components/FlavourSlider"
const Flavour = () => {
  return (
    <section className="flavor-section">
        <div className="h-full flex lg:flex-row flex-col items-center relative">
            <div className="title lg:w-[57%] flex flex-none items-center justify-center h-80 lg:h-full md:mt-20 xl:mt-0">
                <FlavourTitle />
            </div>
            <div className="slider h-full">
                <FlavourSlider />
            </div>
        </div>
    </section>
  )
}

export default Flavour