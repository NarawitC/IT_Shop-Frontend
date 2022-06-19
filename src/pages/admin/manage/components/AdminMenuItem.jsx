function AdminMenuItem({ menuName, thisPage, onClick }) {
  return (
    <div className="d-flex gap-1 align-items-center">
      <button className={`btn-user-link `} onClick={onClick}>
        <div className={`${thisPage ? 'font-text-primary' : null}`}>
          {menuName}
        </div>
      </button>
    </div>
  );
}

export default AdminMenuItem;
