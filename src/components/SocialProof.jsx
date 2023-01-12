import { feedback } from "../constants";
import styles from "../styles.js";
import FeedbackCard from "./FeedbackCard";
import Fade from 'react-reveal/Fade';

const SocialProof = () => (
    
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
         <Fade top big>

            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient bottom-40" />

                <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                    
                    <h2 className={styles.heading2}>
                        What People are <br className="sm:block hidden"/> saying about us
                    </h2>
                    
                    <div className="w-full md:mt-0 mt-6">

                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
            </div>
         </Fade>
        

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            <Fade bottom big>{feedback.map((card) => <FeedbackCard className="" key={card.id} {...card} />)}</Fade>
            </div>
      

    </section>
)

export default SocialProof