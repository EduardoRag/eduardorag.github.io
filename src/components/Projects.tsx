import styles from '../styles/projects.module.scss';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section className={styles.section} id='projects'>
            <strong className='strong projects-strong'>Projetos</strong>
            <article className={styles['projects-container']}>
                <ProjectCard />
            </article>
        </section>
    )
}

export default Projects;