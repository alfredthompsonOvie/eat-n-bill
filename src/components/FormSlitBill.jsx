function FormSlitBill() {
	return (
		<form className="form-split-bill">
			<h2>Split a bill with X</h2>

			<label htmlFor="bill">💰 Bill Value</label>
			<input type="text" id="bill" />

			<label htmlFor="user bill"> Your Expense</label>
			<input type="text" id="user bill" />

			<label htmlFor="friend bill"> X&apos;s Expense</label>
			<input type="text" id="friend bill" disabled/>

			<label> Who is paying the bill</label>
			<select>
				<option value="user">You</option>
				<option value="friend">X</option>
			</select>

			<button className="button">Split Bill</button>
		</form>
	);
}

export default FormSlitBill;
