import AddNewFriend from "./AddNewFriend";
import Button from "./Button";
import { ListOfFriendsProps } from "./types";

const ListOfFriends = ({
  handleFriendInfo,
  selectedFriend,
  curState,
  addNewFriendHandler,
  itsOpen,
  setItsOpen,
}: ListOfFriendsProps): JSX.Element => {
  return (
    <div className="sidebar">
      {curState.map((friend) => (
        <ul key={friend.id}>
          <li id={String(friend.id)}>
            <img src={friend.image} alt="img" />
            <div>
              <h3>{friend.name}</h3>
              {friend.balance < 0 || friend.balance > 0 ? (
                <p
                  className={
                    friend.balance > 0
                      ? `green`
                      : friend.balance < 0
                      ? `red`
                      : ``
                  }
                >
                  {friend.balance < 0
                    ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
                    : `${friend.name} owe you ${friend.balance}$`}
                </p>
              ) : (
                <p>{`You and ${friend.name} are even`}</p>
              )}
            </div>
            <Button
              onClick={() => {
                if (!selectedFriend) handleFriendInfo(friend);
                if (selectedFriend) handleFriendInfo(null);
              }}
            >
              {selectedFriend && friend.id === selectedFriend.id
                ? "close"
                : "select"}
            </Button>
          </li>
        </ul>
      ))}
      {itsOpen && <AddNewFriend addNewFriendHandler={addNewFriendHandler} />}
      <Button onClick={() => setItsOpen((e) => !e)}>
        {itsOpen ? "Close" : "Add Friend"}
      </Button>
    </div>
  );
};

export default ListOfFriends;
