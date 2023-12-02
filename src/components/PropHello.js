function PropHello({name,description,image,children}) {
    return(
        <li>
           <p> {name}  </p> 
           <p> {description} </p>
           <p> {children} </p>
           <p> <img src={image}  className="image" alt={name}> </img></p>
        </li>
    )
}
export default PropHello;