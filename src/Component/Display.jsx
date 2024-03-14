import styles from './Display.module.css';
export function Display({disValue}){
    return<>
    <input type="text" className={styles.hsDisplay} value={disValue} readOnly/>
    </>

}

export default Display;
