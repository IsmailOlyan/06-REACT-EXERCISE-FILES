
// const RenderList = () => {
//     const fruits = ['mango', 'orange', 'banana'];

//     return (
//         <>
//         <ul>
           
//             {fruits.map((fruit, index) => {
//                 return <li key={index}>{fruit}</li>;
//             })}

//         </ul>
//         </>
//     );
// };


// export default RenderList;

const RenderList = () =>{
    const Informations = [
        {id: 1, Name: "ismail Olyan", email: "ismaaciil1432@gmail.com"},
        {id: 2, Name: "Omar M Olyan", email: "omari@gmail.com"},
        {id: 3, Name: "Abdirahman alasow", email: "alalow2024@gmail.com"},
        {id: 4, Name: "Shuceyb Mohamed ali", email: "engshueyb2000@gmail.com"}
    ]

    return (
        <>
        <table border={1}>
            <tr>
                <th>id</th>
                <th> Name</th>
                <th>email</th>
            </tr>
            <tbody>
                {
                    Informations.map((info)=>(
                        <tr >
                            <td>{info.id}</td>
                            <td>{info.Name}</td>
                            <td>{info.email}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        </>
    )
}

export default RenderList;
