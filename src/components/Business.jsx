import { features } from "../constants";
import styles from "../styles";
import { layout } from "../styles";
import Button from "./Button";
import Fade from 'react-reveal/Fade';


const FeatureCard = ({icon, title, content, index}) => (

    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0" /*Does not apply the margin for the last feature*/} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimPurple`}>
            <span alt="star" className="flex justify-center items-center text-3xl w-[50%] h-[50%] object-contain text-purple-500">{icon}</span>
        </div>  

        <div className="flex-1 flex flex-col ml-3">

            <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h3>

            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>

        </div>

    </div>
)

const Business = () => (
    <section id="features" className={`${layout.section}`}>

            <Fade left big> 
        
                <div className={`${layout.sectionInfo}`}>
                    
                    <h2 className={`${styles.heading2}`}>
                        You do the business, <br className="sm:block hidden" /> we’ll handle
                        the money.
                    </h2>

                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        With the right credit card, you can improve your financial life by
                        building credit, earning rewards and saving money. But with hundreds
                        of credit cards on the market.
                    </p>

                    <Button styles={`mt-10`} />
                </div>
            </Fade>


            <Fade right big>

                <div className={`${layout.sectionImg} flex-col`}>

                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} {...feature} index={index} />
                    ))}

                </div>

            </Fade>


    </section>
)

export default Business