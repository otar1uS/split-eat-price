import Button from "./Button";
import { useState } from "react";
import { BillProps } from "./types";

const Bill = ({
  setOpen,
  selectedFriend,
  handleValueOfBills,
}: BillProps): JSX.Element => {
  const [state, setState] = useState({
    billValue: "",
    yourExpense: "",
    friendsExpense: "",
    whoIsPaying: "you",
  });

  const friendsExpense = Number(state.billValue) - Number(state.yourExpense);

  const formHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const totalBill = Number(state.billValue);
    const yourExpense = Number(state.yourExpense);
    const selectedFriendExpense = totalBill - yourExpense;
    const whosPaying = state.whoIsPaying;
    const balanceOfSelectedFriend = selectedFriend.balance;

    if (
      !(totalBill === yourExpense + selectedFriendExpense && totalBill !== 0)
    ) {
      console.log("error");
      return;
    }

    let whoOwesWhomAfterPaying: number;
    if (whosPaying === "you") {
      whoOwesWhomAfterPaying = balanceOfSelectedFriend + selectedFriendExpense;
    } else {
      whoOwesWhomAfterPaying = balanceOfSelectedFriend - yourExpense;
    }

    handleValueOfBills(whoOwesWhomAfterPaying);

    setOpen(null);
  };

  return (
    <form className="form-split-bill" onSubmit={formHandler}>
      <h2>{selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={state.billValue}
        onChange={(e) => setState({ ...state, billValue: e.target.value })}
      />
      <label>🧍‍♂️ Your expense</label>
      <input
        type="number"
        value={state.yourExpense}
        onChange={(e) => setState({ ...state, yourExpense: e.target.value })}
      />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="number" value={friendsExpense} disabled />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={state.whoIsPaying}
        onChange={(e) => setState({ ...state, whoIsPaying: e.target.value })}
      >
        <option value="you">you</option>
        <option value="someone">{selectedFriend.name}</option>
      </select>
      <Button className="button">Split bill</Button>
    </form>
  );
};

export default Bill;
