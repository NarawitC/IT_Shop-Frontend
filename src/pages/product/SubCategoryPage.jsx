import { useParams } from 'react-router-dom';

function SubCategoryPage() {
  const { subCategoryId } = useParams();
  return <div className="content-default-width mx-auto">SubCategoryPage</div>;
}

export default SubCategoryPage;
