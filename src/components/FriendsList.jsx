/* eslint-disable react/prop-types */
// import Button from "./Button";

function FriendsList({ friends, onSelected, selected }) {
	return (
		<ul>
			{friends.map((friend) => (
				<li key={friend.id}>
					<img src={friend.image} alt={friend.name} />

					<h3>{friend.name}</h3>

					{friend.balance < 0 && (
						<p className="red">
							{" "}
							You owe {friend.name} {Math.abs(friend.balance)}
						</p>
					)}
					{friend.balance > 0 && (
						<p className="green">
							{friend.name} owes you {Math.abs(friend.balance)}
						</p>
					)}
					{friend.balance === 0 && <p>You and {friend.name} are even!</p>}

					{/* <Button onSelected={onSelected }>select</Button> */}
					<button className="button" onClick={() => onSelected(friend)}>
						{selected === friend.name ? "close" : "select"}
					</button>
				</li>
			))}
		</ul>
	);
}

export default FriendsList;
