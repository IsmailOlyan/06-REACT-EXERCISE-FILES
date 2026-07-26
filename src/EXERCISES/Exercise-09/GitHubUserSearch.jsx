import React, { useState, useEffect } from 'react';

const GitHubUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Log-garee khaladaadka dhaca
  useEffect(() => {
    if (error) {
      console.error('Error fetching Pokémon:', error);
    }
  }, [error]);

  const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError('');
    setPokemonData(null);

    try {
      // 1 ilbiriqsi oo hakin ah si uu loading-ka u muuqdo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Waxaan u wacaynaa PokéAPI
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase().trim()}`
      );

      if (!response.ok) {
        throw new Error('Pokémon-kaan lama helin! Fadlan hubi higaada.');
      }

      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Pokémon Search</h2>
      <input
        type="text"
        placeholder="Qor magaca Pokémon (e.g., pikachu)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '0.5rem', width: '250px' }}
      />
      <button onClick={handleSearch} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Raadi
      </button>

      {/* Loading State */}
      {loading && <p style={{ fontWeight: 'bold', color: '#555' }}>Waa la raadinayaa...</p>}
      
      {/* Error State */}
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>}

      {/* Talaabada 2-aad: Muujinta Xogta Pokémon-ka */}
      {pokemonData && (
        <div style={{ 
          marginTop: '1.5rem', 
          border: '1px solid #ccc', 
          padding: '1rem', 
          borderRadius: '8px', 
          display: 'inline-block',
          backgroundColor: '#f9f9f9'
        }}>
          {/* 1. Magaca (Xarafka hore weyn baa laga dhigay) */}
          <h3 style={{ textTransform: 'capitalize' }}>{pokemonData.name}</h3>
          
          {/* 2. Sawirka (Sprite) */}
          {pokemonData.sprites?.front_default && (
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              width="150"
            />
          )}
          
          {/* 3. Macluumaad kale: Awoodaha (Abilities) */}
          <div style={{ marginTop: '0.5rem' }}>
            <strong>Awoodaha (Abilities):</strong>
            <ul style={{ listStyleType: 'none', padding: 0, textTransform: 'capitalize' }}>
              {pokemonData.abilities.map((item, index) => (
                <li key={index} style={{ margin: '3px 0' }}>
                  • {item.ability.name} {item.is_hidden && <small style={{ color: 'gray' }}>(Hidden)</small>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;