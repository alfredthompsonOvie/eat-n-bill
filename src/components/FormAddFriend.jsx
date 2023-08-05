function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">👫 Friend Name</label>
      <input type="text" id="name"/>
      
      <label htmlFor="img">🎴 Friend Image</label>
      <input type="text" id="img"/>
      
      <button className="button">add</button>
    </form>
  )
}

export default FormAddFriend
