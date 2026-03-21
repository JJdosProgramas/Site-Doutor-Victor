import styles from './Homedois.module.css'
import { CiStethoscope } from "react-icons/ci";
import Victor from './imgs/victor.png'
function Homedois(){
    
    return( 

            <div id="home" className={`${styles.home}`}>  
            <div className={`${styles.letrario}`}>
            <div className={`${styles.letras}`}>
            <h1>Cuide de sua saúde<br/>sem sair de casa</h1>
           <p><span>Através da telemedicina, o Dr. Victor te ajuda a cuidar de sua saúde<br/></span></p>
           <p className={`${styles.p2}`}><span>Agende sua consulta agora e receba atendimento humanizado</span></p>
           <p className={`${styles.p2}`}><span>e de qualidade.</span></p>
           <a href="https://wa.me/554591288556?text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20online!" className={`${styles.consulta}`} target='blank'>Agende sua consulta</a>  
           <p><span className={`${styles.nome}`}>Dr. Victor Mori</span></p>  
           <p><span className={`${styles.crm}`}>CRM/PR 62373</span></p>
           </div>
           </div>  
           <img src={Victor} className={styles.foto}/>
           
            
        
        </div>   
        

    )
}
export default Homedois