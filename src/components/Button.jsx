// eslint-disable-next-line react/prop-types
function Button({children, onSelected}) {
  return (
    <button className="button" onClick={onSelected}>
      {children}
    </button>
  )
}

export default Button
