import GithubIcon from '../assets/githubIcon.svg';
import HtmlIcon from '../assets/html5Icon.svg';
import InsomniaIcon from '../assets/insomniaIcon.svg';
import JavaScritIcon from '../assets/javaScriptIcon.svg';
import NodeJsIcon from '../assets/nodeJSIcon.svg';
import ReactIcon from '../assets/reactIcon.svg';
import TypeScriptIcon from '../assets/typeScriptIcon.svg';
import styles from '../styles/skills.module.scss';

function Skills() {
    return (
        <section className={styles.section} id='skills'>
            <article className={styles.article}>
                <h2 className='h2'>
                    🤓 Skills - Experiências
                </h2>

                <strong className='strong'>
                    Tecnologias e habilidades
                </strong>

                <div className={styles['skills-container']}>
                    <p className={styles.p}>
                        Techs que uso no dia a dia
                    </p>

                    <div className={styles.skills}>
                        <img
                            src={ReactIcon}
                            alt='Icone do React'
                        />
                        <img
                            src={JavaScritIcon}
                            alt='Icone do JavaScript'
                        />
                        <img
                            src={TypeScriptIcon}
                            alt='Icone do TypeScript'
                        />
                        <img
                            src={NodeJsIcon}
                            alt='Icone do NodeJS'
                        />
                        <img
                            src={HtmlIcon}
                            alt='Icone do Html5'
                        />
                        <img
                            src={GithubIcon}
                            alt='Icone do Github'
                        />
                        <img
                            src={InsomniaIcon}
                            alt='Icone do Insomnia'
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Skills;