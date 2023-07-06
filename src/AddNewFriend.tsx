import { useState } from "react";
import Button from "./Button";
import { AddNewFriendProps, ListOfFriendsType } from "./types";

const AddNewFriend = ({
  addNewFriendHandler,
}: AddNewFriendProps): JSX.Element => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: ListOfFriendsType = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    addNewFriendHandler(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddNewFriend;
