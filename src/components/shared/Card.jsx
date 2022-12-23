const Card = (props) => {
  // Card ใช้เพื่อลดการเขียน cssซ้ำ ของcomponent, มาเขียนไว้ใน cardแทน ทีเดียว
  const classes = "" + props.className;
  return (
    <div className={`${props.className} rounded-xl shadow`}>
      {props.children}
    </div>
  );
};

export default Card;
