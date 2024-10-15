import styles from './ProjectsStyles.module.css'
import dmg from '../../assets/discount my groceries.png'
import loopOfThings from '../../assets/loop of things logo rgb.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard
                    src={dmg}
                    link='https://discountmygroceries.today'
                    h3='Discount My Groceries'
                    p='Grocery shopping utility app.'
                />
                <ProjectCard
                    src={loopOfThings}
                    link=''
                    h3='Loop of Things'
                    p='Entertainment events app.'
                />
            </div>
        </section>
    )
}

export default Projects
