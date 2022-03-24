const Music = props => {
    return ( 
        <div>  
            <img src={props.image} alt="cover"/>
            <h1>{props.name}</h1>
            <h2>{props.album}</h2>
        </div>       
    )
}

export default Music;