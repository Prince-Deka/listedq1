import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, submittedTimes, details, timeStamp }) => {
 
  const handle2 = (e) =>{
    details(rows[e].executionDetails);
    timeStamp(submittedTimes[e].timestamps)
  }
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          
          <ListRow  handl2={handle2} index={index}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{submittedTimes.find(time => time["&id"] === row["&id"]).timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
          </ListRow>
        ))}
    
        
      </tbody>
    </table>
  );
};

export default List;
