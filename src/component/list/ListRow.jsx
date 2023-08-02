import styles from "./ListRow.module.css";

const ListCell = ({children, handl2, index }) => {

  
  return <tr className={styles.cell} onClick={()=>handl2(index)}>{children}</tr>;
};

export default ListCell;
