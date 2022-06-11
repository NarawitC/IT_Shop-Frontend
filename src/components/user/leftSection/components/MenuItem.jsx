import { useUserContext } from '../../../../contexts/UserContext';
function MenuItem({ menuName, children, thisPage }) {
  const { page, setPage } = useUserContext();
  return (
    <div className="d-flex gap-1 align-items-center">
      {children}
      <button className={`btn-user-link `} onClick={() => setPage(thisPage)}>
        <div className={`${page === thisPage ? 'font-text-primary' : null}`}>
          {menuName}
        </div>
      </button>
    </div>
  );
}

export default MenuItem;
