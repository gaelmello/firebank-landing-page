import { clients } from "../constants";
import styles from '../styles.js'
import Fade from 'react-reveal/Fade';

const Clients = () => (
    
    <>
    
        <Fade right big>

            <section className={`${styles.flexCenter} my-4`}>
                <div className={`${styles.flexCenter} flex-wrap w-full`}>
                    {clients.map((client) => (
                        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>

                            <img src={client.logo} alt="client-logo" className="sm:w-[192px] w-[100px] object-contain" /> 

                        </div>
                    ))}
                </div>
            </section>
        </Fade>
    </>
)

export default Clients