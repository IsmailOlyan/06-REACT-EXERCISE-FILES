
const RenderList = () => {
    const fruits = ['mango', 'orange', 'banana'];

    return (
        <>
        <ul>
           
            {fruits.map((fruit, index) => {
                return <li key={index}>{fruit}</li>;
            })}

        </ul>
        </>
    );
};

export default RenderList;
