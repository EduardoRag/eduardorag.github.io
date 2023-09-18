import { Link as LinkReact } from 'react-router-dom';
import { Link } from 'react-scroll';
import ArrowDown from '../assets/arrow-down.svg';
import Avatar from '../assets/avatar.svg';
import GithubIcon from '../assets/github.svg';
import LinkdinIcon from '../assets/linkdin.svg';
import WhatsAppIcon from '../assets/whatsapp.svg';
import styles from '../styles/header.module.scss';
import downloadResume from '../utils/downloadResume';
import whatsAppContact from '../utils/whatsAppContact';

function Header() {
    return (
        <header className={styles.header} id='home'>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className={styles.selected}>Home</Link>
                        <Link to='aboutme' smooth >Sobre mim</Link>
                        <Link to='projects' smooth>Projetos</Link>
                        <Link to='skills' smooth> Skill</Link>
                        <Link to='contact' smooth>Contato</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles['header-content']}>
                <div className={styles['header-user-div']}>
                    <strong className='strong'>👋 Saudações!</strong>
                    <h1 className='h1-name'>Eduardo</h1>
                    <span>Full-Stack developer</span>
                    <div className={styles['stacks-div']}>
                        <LinkReact to='https://www.linkedin.com/in/eduardo-jarek-9773a5164/' target='_blank'>
                            <img
                                src={LinkdinIcon}
                                alt="Icone do linkedin"
                            />
                        </LinkReact>
                        <LinkReact to='https://github.com/EduardoRag' target='_blank'>
                            <img
                                src={GithubIcon}
                                alt="Icone do Github"
                            />
                        </LinkReact>
                    </div>
                </div>
                <img
                    src={Avatar}
                    alt="Avatar do Eduardo"
                    className={styles.avatar}
                />
                <div className={styles['contact-div']}>
                    <div
                        className={styles['download-cv-div']}
                        onClick={() => downloadResume()}
                    >
                        <strong>Baixar CV</strong>
                        <img
                            src={ArrowDown}
                            alt="Flecha de download do CV"
                        />
                    </div>
                    <div
                        className={styles['whats-div']}
                        onClick={() => whatsAppContact()}
                    >
                        <img
                            src={WhatsAppIcon}
                            alt="Icone do whatsApp"
                        />
                        <strong>Vamos conversar</strong>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;