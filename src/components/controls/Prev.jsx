const Prev = ({icon, size, onClick}) =>{

    const Icon = icon;
    return (
        <button onClick={onClick}>
          <Icon size={size} />
        </button>
    )

}
export default Prev;