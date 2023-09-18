import styles from '../styles/aboutme.module.scss';

function AboutMe() {
    return (
        <section className={styles.section} id='aboutme'>
            <article className={styles['pic-div']} />

            <article className={styles['about-me']}>
                <h2 className='h2'>🧐 Sobre mim</h2>

                <h1 className='h1-name'>Eduardo</h1>

                <p>👋 Com habilidades tecnológicas.</p>

                <p>👨‍💻 Desenvolvendo e programando com JavaScript, Typescript, React JS e Node JS.</p>

                <p>🎓 Formado em Desenvolvimento de Softwares FullStack pela Cubos Academy.</p>

                <p>💡 Interesses em desenvolvimento Front-end e/ou Back-end.</p>

                <p>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</p>
            </article>
        </section>
    )
}

export default AboutMe;