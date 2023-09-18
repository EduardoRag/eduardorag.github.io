import { useState } from 'react';
import projectsList from '../data/projects-list.json';
import styles from '../styles/projectCard.module.scss';
import TProject from '../types/project';

function ProjectCard() {
    const [projects] = useState<TProject[]>(projectsList);

    const handleOnClick = (page: TProject): void => {
        window.open(page.url, "_blank");
    }

    return (
        projects.map((project, id) => (
            <div className={styles['card-main-div']} key={id} onClick={() => handleOnClick(project)}>
                <h2 className={styles.h2}>
                    {project.name}
                </h2>

                <p className={styles.p}>
                    {project.description}
                </p>

                <div className={styles['project-stacks']}>
                    {project.stacks.map((stack) => (
                        <strong className={styles.strong}>
                            {stack}
                        </strong>
                    ))}
                </div>
                <img
                    className={styles.img}
                    src={project.img}
                    alt='Imagem do projeto'
                />
            </div>
        ))
    )
}

export default ProjectCard;