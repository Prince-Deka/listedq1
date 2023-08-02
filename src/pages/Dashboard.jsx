import { useEffect, useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";



const Dashboard = () => {
  const [data, setData] = useState(mockData.results);
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  
  const handleSearch = (e) =>{
    const t = e.target.value;
    setSearchText(t);
    setData(mockData.results.filter(x=>{
      return x["&id"].toLowerCase().includes(t.toLowerCase());
    }))
  }
  

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${data.length} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e)=>handleSearch(e)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}> 
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details" 
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"

            details
          />
        </div>
        <List rows={data} submittedTimes={timestamps.results} timeStamp={setSelectedOrderTimeStamps} details={setSelectedOrderDetails}/> 
      </div>
    </div>
  );
};

export default Dashboard;
