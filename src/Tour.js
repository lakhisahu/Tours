const Tour =({tours,remove}) =>{
    return(
        <>
        <div className="container">
            <h1>Our Tours</h1>
            {
                tours.map(e=>{
                    return(
                        <div className="card">
                <img src= {e.image} />
                <h2>{e.title}</h2>
                <p>{e.info}</p>
                <button onClick={()=>{remove(e.id)}}>Delete</button>
            </div>

                    )
                }) 
            }
            
        </div>
        </>
    )
}

export default Tour;