import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='C/C++' />
                <SkillList src={checkMarkIcon} skill='C#' />
                <SkillList src={checkMarkIcon} skill='Python' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
                <SkillList src={checkMarkIcon} skill='Dart' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Qt Framework' />
                <SkillList src={checkMarkIcon} skill='Django' />
                <SkillList src={checkMarkIcon} skill='React' />
                <SkillList src={checkMarkIcon} skill='Flutter' />
                <SkillList src={checkMarkIcon} skill='Tailwind' />
                <SkillList src={checkMarkIcon} skill='Bootstrap' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Git' />
                <SkillList src={checkMarkIcon} skill='Docker' />
                <SkillList src={checkMarkIcon} skill='AWS' />
                <SkillList src={checkMarkIcon} skill='VS Code' />
                <SkillList src={checkMarkIcon} skill='MySQL' />
                <SkillList src={checkMarkIcon} skill='Nginx' />
                <SkillList src={checkMarkIcon} skill='Kubernetes' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Linux' />
                <SkillList src={checkMarkIcon} skill='MacOS' />
                <SkillList src={checkMarkIcon} skill='Windows' />
            </div>
            <hr />
        </section>
    )
}
    
export default Skills
