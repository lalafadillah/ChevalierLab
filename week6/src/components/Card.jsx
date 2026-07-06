function Card(props){
    return(
        <div>
            <h3>{props.nama}</h3>
            <p>{props.umur} Tahun</p>
        </div>
    );
}
export default Card;