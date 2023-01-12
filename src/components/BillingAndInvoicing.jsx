import styles, { layout } from "../styles.js";
import { billing, apple, googlePlay } from "../assets";
import Fade from 'react-reveal/Fade'
import Circle from "./Circle";

const BillingAndInvoicing = () => (

    <section id="product"  className={layout.sectionReverse}>

        <Fade left big>

            <div className={`${layout.sectionImgReverse} animate__animated `}>

                <div className="flex-1 flex justify-center items-center">
                    
                    <Circle/>
                    
                    <img src={billing} alt="billing" className="w-[100%] h-[100%] relative z-[5]"  />
                </div>
                
                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}

            </div>
        </Fade>

        <Fade right big>

            <div className={`${layout.sectionInfo}`}>

                <h2 className={`${styles.heading2}`}>

                Easily control your <br className="sm:block hidden" /> billing &
                invoicing

                </h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                    aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                    placerat.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={apple} alt="apple-store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
                    <img src={googlePlay} alt="google-play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
                </div>

            </div>
        </Fade>

    </section>
)

export default BillingAndInvoicing