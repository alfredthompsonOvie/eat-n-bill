import { useState } from "react";

// eslint-disable-next-line react/prop-types
function FormSlitBill({ onSetBalance, selected }) {
	const [yourBill, setYourBill] = useState("");
	const [totalBill, setTotalBill] = useState("");
	const [whoIspaying, setWhoIsPaying] = useState('you');

	const friendBill = totalBill - yourBill;

	function handleSubmit(e) {
		e.preventDefault();

		let balance;
		{whoIspaying === 'you' ? balance = friendBill : balance = -yourBill}

		// console.log(balance);
		onSetBalance(selected, balance);
	}

	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>Split a bill with {selected}</h2>

			<label htmlFor="bill">💰 Bill Value</label>
			<input
				type="text"
				id="bill"
				value={totalBill}
				onChange={(e) => setTotalBill(Number(e.target.value))}
			/>

			<label htmlFor="user_bill">😎 Your Expense</label>
			<input
				type="text"
				id="user_bill"
				value={yourBill}
				onChange={(e) => setYourBill(Number(e.target.value))}
			/>

			<label htmlFor="friend_bill">😋 {selected}&apos;s Expense</label>
			<input type="text" id="friend_bill" value={yourBill ? friendBill : ""} disabled />

			<label>🤑 Who is paying the bill</label>
			<select value={whoIspaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
				<option value="you">You</option>
				<option value="friend">{selected}</option>
			</select>

			<button className="button">Split Bill</button>
		</form>
	);
}

export default FormSlitBill;
