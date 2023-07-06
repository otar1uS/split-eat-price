import { useState } from "react";
import ListOfFriends from "./ListOfFriends";
import { ListOfFriendsType } from "./types";

import Bill from "./Bill";

const initialFriends: ListOfFriendsType[] = [
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

const App = (): JSX.Element => {
  const [curState, setNewState] = useState<ListOfFriendsType[]>(initialFriends);
  const [selectedFriend, setSelectedFriend] =
    useState<ListOfFriendsType | null>(null);
  const [itsOpen, setItsOpen] = useState<boolean>(false);

  const addNewFriendHandler = (newFriend: ListOfFriendsType): void => {
    setNewState((friends) => [...friends, newFriend]);
    setItsOpen((isOpen) => !isOpen);
  };

  const handleFriendInfo = (info: ListOfFriendsType | null): void => {
    setSelectedFriend(info);
  };

  const handleValueOfBills = (bill: number): void => {
    setNewState((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id ? { ...friend, balance: bill } : friend
      )
    );
  };

  console.log(selectedFriend);

  return (
    <div className="app">
      <ListOfFriends
        curState={curState}
        addNewFriendHandler={addNewFriendHandler}
        handleFriendInfo={handleFriendInfo}
        selectedFriend={selectedFriend}
        itsOpen={itsOpen}
        setItsOpen={setItsOpen}
      />

      {selectedFriend && (
        <Bill
          setOpen={setSelectedFriend}
          selectedFriend={selectedFriend}
          handleValueOfBills={handleValueOfBills}
        />
      )}
    </div>
  );
};

export default App;
