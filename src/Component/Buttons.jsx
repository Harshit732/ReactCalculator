import styles from './Buttons.module.css';
export function Buttons({ num , onButtonClick}) {
  return (
    <>
      {num.map((item) => (
        <button type="button" className={styles.hsButton} onClick={onButtonClick} key={item}>
          {item}
        </button>
      ))}
    </>
  );
}

export default Buttons;
