import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import styles from '../styles/home.module.scss';

function Home() {
  return (
    <main className={styles['main-container']}>
      <Header />
      <div className={styles.line} />
      <AboutMe />
      <div className={styles.line} />
      <Projects />
      <div className={styles.line} />
      <Skills />
      <div className={styles.line} />
      <Contact />
      <div className={styles.line} />
    </main>
  );
}
export default Home;