import { useState } from "react";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  const [activeSection, setActiveSection] = useState("friends"); // Состояние для активной секции

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        message={userData.message}
      />
      
      <div className="buttons">
        <button 
          onClick={() => setActiveSection("friends")}
          className={activeSection === "friends" ? "active" : ""}
        >
          Friends
        </button>
        <button 
          onClick={() => setActiveSection("transactions")}
          className={activeSection === "transactions" ? "active" : ""}
        >
          Transactions
        </button>
      </div>

      {activeSection === "friends" && <FriendList list={friends} />}
      {activeSection === "transactions" && <TransactionHistory items={transactions} />}
    </>
  );
};

export default App;
