import styles from './HeroStyles.module.css';
import profileImg from '../../assets/personal website profile photo.png';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'dark' ? moon : sun;
    const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;
    const githubIcon = theme === 'dark' ? githubDark : githubLight;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={profileImg} 
                    alt="Profile picture of Sibusiso Gumede"
                />
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Sibusiso
                    <br />
                    Gumede
                </h1>
                <h2>Software Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/sibusiso-j-gumede-6580b01a8" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://github.com/Sibusiso-Gumede" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    2 years experience in developing web and mobile applications.
                    Equipped with a diverse skill set. Proficient in various platforms, frameworks and languages.
                    I possess transferable technical experience and can learn new technologies.
                </p>
            </div>
        </section>
    )
}

export default Hero;
