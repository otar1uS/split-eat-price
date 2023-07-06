export interface ListOfFriendsType {
  id: number | string;
  name: string;
  image: string;
  balance: number;
}

export interface ListOfFriendsProps {
  handleFriendInfo: (info: ListOfFriendsType | null) => void;
  selectedFriend: ListOfFriendsType | null;
  curState: ListOfFriendsType[];
  addNewFriendHandler: (newFriend: ListOfFriendsType) => void;
  itsOpen: boolean;
  setItsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BillProps {
  setOpen: (value: ListOfFriendsType | null) => void;
  selectedFriend: ListOfFriendsType;
  handleValueOfBills: (bill: number) => void;
}

export interface AddNewFriendProps {
  addNewFriendHandler: (newFriend: ListOfFriendsType) => void;
}
