import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='C/C++' />
                <SkillList src={checkMarkIcon} skill='Python' />
                <SkillList src={checkMarkIcon} skill='JavaScript' />
                <SkillList src={checkMarkIcon} skill='Rust' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Qt Framework' />
                <SkillList src={checkMarkIcon} skill='Django' />
                <SkillList src={checkMarkIcon} skill='React' />
                <SkillList src={checkMarkIcon} skill='Flutter' />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill='Git' />
                <SkillList src={checkMarkIcon} skill='Docker' />
                <SkillList src={checkMarkIcon} skill='AWS' />
                <SkillList src={checkMarkIcon} skill='VS Code' />
                <SkillList src={checkMarkIcon} skill='MySQL' />
                <SkillList src={checkMarkIcon} skill='Nginx' />
            </div>
            <hr />
        </section>
    )
}
    
export default Skills
