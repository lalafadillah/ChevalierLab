function Card(props){
    return(
        <div>
            <h3>{props.nama}</h3>
            <p>{props.umur} Years</p>
        </div>
    );
}
export default Card;