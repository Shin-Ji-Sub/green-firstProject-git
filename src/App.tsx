
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    const navBar = document.querySelector(".nav-container");
    if (navBar instanceof HTMLElement) {
      if (toggle) {
        navBar.style.left = "0";
      } else {
        navBar.style.left = "-10rem";
      }
    }
  }, [toggle]);

  return (
    <div className="App">
      <header>
        <div className='header-title'>
          TITLE
        </div>
        <ul className='header-right-container'>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </header>

      <nav>
        <button className='nav-open-btn' onClick={() => {
          setToggle(true);
        }}>
          Open
        </button>
        <ul className='nav-container'>
          <li onClick={() => {
            setToggle(false);
          }}>Close</li>
          <li>주문하기</li>
          <li>메뉴</li>
          <li>게시판</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
