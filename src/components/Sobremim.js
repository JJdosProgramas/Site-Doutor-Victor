import victor from './imgs/victorsobremim.png'
import styles from './Sobremim.module.css'
import { RiInstagramLine } from "react-icons/ri";

function Sobremim() {
    return(
        
    <div id="sobremim" className={`${styles.container}`}> 
        <div className={`${styles.image}`}>
            <img src={victor} />
        </div> 
        <div className={`${styles.card}`}>
            <h1>Sobre Mim</h1>
            <p>Sou o Dr. Victor Hugo, médico formado pela UNIPAR em 2025, apaixonado por cuidar de pessoas e promover saúde de forma integral.<br/>
            Minha prática é guiada pela escuta ativa, pelo acolhimento e pela busca de soluções que considerem não apenas os sintomas, mas a pessoa como um todo.<br/>
            Acredito que a medicina vai além do tratamento de doenças é sobre prevenção, orientação e construção de bem-estar ao longo da vida.</p>  
                                                                                                                           
            <a href="https://www.instagram.com/victormori13/" target="blank" className={`${styles.insta}`}><RiInstagramLine  className={`${styles.logo}`} />Meu trabalho mais de perto</a>
        </div>
    </div>
    )
}

export default Sobremim