import { Link } from 'react-router-dom';
import Category from '../../sidebar/Category';

function HeaderIdentification() {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{ width: '220px' }}
    >
      <Category></Category>
      <Link
        className="link-text1 fontAudioWide"
        style={{ fontSize: '1.8rem' }}
        to="/"
      >
        &lt;IT Shop/&gt;
      </Link>
    </div>
  );
}

export default HeaderIdentification;
