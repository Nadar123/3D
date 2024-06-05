import { Link, NavLink } from 'react-router-dom';
import Preact from '../../assets/preact.svg';
const Header = ({ username, profession }) => {
  return (
    <header>
      <div className='right-col'>
        <div className='logo'>
          <Link to='/'>
            <img src={Preact} alt='Logo' />
          </Link>
        </div>
        <div className='user-info'>
          <p className='name'>{username}:</p>
          <p className='profession'>{profession}</p>
        </div>
      </div>
      <div className='left-col'>
        <select className='select-box'>
          <option value='en'>English</option>
          <option value='fr'>French</option>
          // Add more options as needed
        </select>
        <div>
          <form className='form-action'>
            <textarea placeholder='Send feedback'></textarea>
            <button type='submit' className='action-btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
export default Header;
