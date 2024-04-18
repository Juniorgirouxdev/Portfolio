import styles from './Page404.module.css'


export default function index() {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Algo de errado não está certo!</h2>
      <div className={styles.textos}>
        <span className={styles.texto_grande}>404</span>
        <strong className={styles.texto_mensagem}>Página Não Localizada!</strong>
      </div>
    </section>
  )
}
