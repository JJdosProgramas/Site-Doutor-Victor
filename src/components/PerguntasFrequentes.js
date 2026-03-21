import styles from './PerguntasFrequentes.module.css'

function PerguntasFrequentes() {
    return(
        <div id="perguntas"className={`${styles.container}`}>
      <h1 className={`${styles.titulo}`}>Perguntas frequentes</h1>
      <section className={`${styles.faq}`}>
      <div className={`${styles.faqitensa}`}>
        <h1>Como posso ajudar?</h1>
      <p>-Atendimento clínico e acompanhamento medico;
      <br/>-Soliçitação e analise de exames;
      <br/>-medicina endocanabinoide;
      <br/>-avaliação metabólica e nutricional;
      <br/>-medicina do estilo de vida;
      </p>
      </div>

      <div className={`${styles.faqitens}`}>
      <h1>O que esperar da consulta medica?</h1>
      <p>Consulta medica individualizada focada na pessoa e não apenas no sintoma</p>
      </div>

      <div className={`${styles.faqitens}`}>
      <h1>A consulta é online?</h1>
      <p>Sim, 100% online e com total privacidade.</p>
      </div>

      <div className={`${styles.faqitens}`}>
      <h1>Como faço o agendamento?</h1>
      <p>O agendamento é feito via WhatsApp.</p>
      </div>

      <div className={`${styles.faqitens}`}>
      <h1>Aceita plano de saúde?</h1>
      <p>No momento só aceitamos consulta particular.</p>
      </div>

        
      <div className={`${styles.faqitens}`}>
      <h1>Qual valor da consulta?</h1>
      <p>O valor pode variar conforme o atendimento. Fale conosco pelo WhatsApp para receber todas as informações.</p>
      </div>
     </section>
     <a href="#home" className={`${styles.agendar}`}>Agendar consulta</a>
    </div>
  );
}

export default PerguntasFrequentes;

