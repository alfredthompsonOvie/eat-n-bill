import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSlitBill from "./components/FormSlitBill";
// import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);


  function handleSelected(friend) {
    setSelected(selected === friend.name ? null : friend.name);
  }
  function handleShowAddFriend() {
    setShowAddForm(show => !show);
    setSelected(null);
  }
  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend])
    setShowAddForm(false);
  }
  function handleSetBalance(name, bal) {
    setFriends(friends => friends.map(friend => {
      if (friend.name === name) {
        return {...friend, balance: bal}
      } else {
        return friend;
      }
   
      // friend.name === name ? {...friend, balance: bal} : friend

    }))
  }

	return (
		<div className="app">
			<div className="sidebar">
        <FriendsList friends={friends} onSelected={handleSelected} selected={selected} />

        {showAddForm && <FormAddFriend onAddFriend={handleAddFriend } />}

        {/* <Button>Add Friend</Button> */}
        <button className="button" onClick={handleShowAddFriend}>
        Add Friend
    </button>
			</div>

      {selected && <FormSlitBill selected={selected} onSetBalance={handleSetBalance} key={selected} />}
		</div>
	);
}

export default App;
