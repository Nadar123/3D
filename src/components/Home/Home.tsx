// import { useState } from 'preact/hooks';
// import PageLayout from '../UI/PageLayout';
// import './home.css';

// function Home() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <PageLayout>
//       <div
//         className={`inner ${isHovered ? 'hovered' : ''}`}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <button className='button'>Ready</button>
//         <div className='pacman'>
//           <div className='pacman-top'></div>
//           <div className='pacman-bottom'></div>
//           <div className='feed'></div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// }

// export default Home;

import { useState } from 'preact/hooks';
import PageLayout from '../UI/PageLayout';
import './home.css';

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <PageLayout>
      <div
        className={`inner ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className='button'>Ready</button>
        <div className={`pacman ${isHovered ? 'walk-border' : ''}`}>
          <div className='pacman-top'></div>
          <div className='pacman-bottom'></div>
          <div className='feed'></div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
