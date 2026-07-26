import {useEffect, useState} from "react";

const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // kanin waa fetch so aqrinayo api 
        const fetchData = async () => {
            await new Promise ((resolve)=> setTimeout (resolve, 10000))
            setLoading(true);
            try {
                // response wuxu soo aqrinaa data-da user ka
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); // wuxu so celinaa dada promise

                // promise ka waxa lo badalaa json 
                const data = await response.json();
                // set la sameeyi, hadaan la sameyni loop ma shaqeynaayo
                setUsers(data);
            setLoading(false);
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    // soo bandhigida list ama xogta laso aqriyay.
    return (
        <div style={{ padding: '20px' }}>
            <h2>Users List</h2> 
            <ul>
                 {/* kani waa loop  */}
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchData;