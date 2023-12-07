import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../topmove/TopMove.css'; 

function TopMove() {
  const [showButton, setShowButton] = useState(false);

  const topMoveButton = () => {
    window.scrollTo({ left: '0px', top: '0px', behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        className={`top-move-button ${showButton ? 'show' : ''}`}
        onClick={topMoveButton}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default TopMove;
