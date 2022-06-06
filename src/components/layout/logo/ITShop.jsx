import { Link } from 'react-router-dom';

function ITShop({ color }) {
  let n;
  switch (color) {
    case 'white':
      n = 1;
      break;
    case 'blue':
      n = 3;
      break;
    default:
      break;
  }
  return (
    <Link
      className={`link-text${n} fontAudioWide`}
      style={{ fontSize: '1.8rem' }}
      to="/"
    >
      &lt;IT Shop/&gt;
    </Link>
  );
}

export default ITShop;
