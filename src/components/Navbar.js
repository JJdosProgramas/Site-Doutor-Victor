import styles from './Navbar.module.css'

function Navbar(){

   var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    // Rola para cima - mostra a navbar
    document.getElementById("navbar").style.top = "0";
  } else {
    // Rola para baixo - esconde a navbar (altura da navbar negativa)
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
    return(
        <>
    
    <nav id="navbar"className={`${styles.navbar}`}>
        <div className={`${styles.victor}`}><p>Dr. Victor mori</p></div>
        <div className={`${styles.options}`}>
        <a href="#home">Home</a>
        <a href="#sobremim">Sobre mim</a>
        <a href="#perguntas">Perguntas frequentes</a>
        </div>
        
    </nav>
    
    </>
    )
}
export default Navbar