// src/Lessons/Custom-Hook/GitHub.jsx

import useFetch from './useFetch'; // or wherever your useFetch file is located

const  GitHub = () => {
 const { data, loading, error } = useFetch('https://api.github.com/users/mchamoudadev');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <img 
        src={data.avatar_url} 
        alt={data.name} 
        style={{ width: '250px', borderRadius: '50%' }} 
      />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
    </div>
  );
}

// MAKE SURE THIS LINE EXISTS AT THE BOTTOM:
export default GitHub;