import React, { useState, useEffect } from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';

function HomePage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count1 < 1) {
        setCount1(count1 + 1);
      }
      if (count2 < 20) {
        setCount2(count2 + 1);
      }
      if (count3 < 276) {
        setCount3(count3 + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count1, count2, count3]);

  return (
    <div className="homePage">
      <div className='textContainer'>
        <div className='wrapper'>
        <h1 className='title'>
          <span>Trouvez </span>
          <span>votre </span>
          <span>logement </span>
          <span>idéal </span>
          <span>avec </span>
          <span className='animate-character'>AIkree</span>
          <span>:</span>
          <span>réductions </span>
          <span>et </span>
          <span>prédictions </span>
          <span>intégrées!</span>
        </h1>

          <p className='paragraph'>
            Trouvez votre prochaine maison à louer avec KarIA ! Étudiants, bénéficiez de réductions exclusives et laissez notre IA prédire les prix pour vous. Simplifiez votre recherche et économisez avec KarIA dès aujourd hui !
          </p>

          <SearchBar />

          <div className='boxes'>
            <div className='box'>
              <h1 className="animate__animated animate__fadeIn">{count1}</h1>
              <h2>Plateformes en Tunisie</h2>
            </div>
            <div className='box'>
              <h1 className="animate__animated animate__fadeIn">{count2}%+</h1>
              <h2>Remises pour les étudiants</h2>
            </div>
            <div className='box'>
              <h1 className="animate__animated animate__fadeIn">{count3}+</h1>
              <h2>Logements disponibles</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src="/TEXI.png" alt='' className="loaded" />
      </div>
    </div>
  );
}

export default HomePage;
