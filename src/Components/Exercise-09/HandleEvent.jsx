
const HnadleEvent = ()=>{
    // const users = []
    const myInfo = null

    return(
   <>
   {/* {
    users.length > 0 ? (
        <ul>
            {
                users.map(user => (
                    <li>{user}</li>
                ))
            }
        </ul>
    ) : <p>No Items Found</p>
   } */}

   {
    myInfo ? (<p>{myInfo.name}</p>) : <p>No items found</p>
   }
   </>
    )
}

export default HnadleEvent;