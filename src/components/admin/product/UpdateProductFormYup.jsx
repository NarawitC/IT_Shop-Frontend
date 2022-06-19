import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

import { useErrorContext } from '../../../contexts/ErrorContext';
import FormYup from '../../layout/form/FormYup';
import Header from '../../layout/form/Header';
import InputYup from '../../layout/form/InputYup';
import SubmitButtonYup from '../../layout/form/SubmitButtonYup';
import InputFileYup from '../../layout/form/InputFileYup';
import Button from '../../button/Button';

import { adminUpdateProduct } from '../../../api/admin/product';
import { getProductById } from '../../../api/admin/product';
import { getAllCategories } from '../../../api/admin/category';
import { useEffect, useState } from 'react';

function UpdateProductFormYup({ setIsLoading }) {
  const [editMode, setEditMode] = useState(false);
  const { productId } = useParams();
  const { setError } = useErrorContext();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ SubCategories: [] });
  const [subCategory, setSubCategory] = useState({});
  const [product, setProduct] = useState({});
  const [mainPicture, setMainPicture] = useState(null);
  const [subPicture1, setSubPicture1] = useState(null);
  const [subPicture2, setSubPicture2] = useState(null);
  const [subPicture3, setSubPicture3] = useState(null);
  const [subPicture4, setSubPicture4] = useState(null);
  const {
    name,
    description,
    quantity,
    price,
    properties,
    categoryId,
    subCategoryId,
  } = product;

  const schema = yup.object().shape({
    name: yup.string().trim().nullable(),
    description: yup
      .string()
      .trim()
      .max(400, 'Description must be less than 400 characters')
      .nullable(),
    quantity: yup.number().nullable(),
    price: yup.number().nullable(),
    properties: yup
      .string()
      .trim()
      .max(2000, 'Properties must be less than 2000 characters')
      .nullable(),
  });

  const handleUpdateSubmit = async (data, reset) => {
    try {
      setIsLoading(true);
      const { name, description, quantity, price, properties } = data;

      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('quantity', quantity);
      formData.append('price', price);
      formData.append('mainPicture', mainPicture);
      formData.append('subPicture1', subPicture1);
      formData.append('subPicture2', subPicture2);
      formData.append('subPicture3', subPicture3);
      formData.append('subPicture4', subPicture4);
      formData.append('categoryId', category.id);
      formData.append('subCategoryId', subCategory.id);
      formData.append('properties', properties);

      await adminUpdateProduct(productId, formData);
      setIsLoading(false);
      navigate('/admin/product/updateProduct/completed');
      reset();
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const handleEditButton = (e) => {
    e.preventDefault();
    setEditMode((prev) => !prev);
  };

  const handleOnChangeCategory = (e) => {
    const { value } = e.target;
    const category = categories.find((category) => category.id === +value);
    setCategory(category);
  };
  const handleOnChangeSubCategory = (e) => {
    const { value } = e.target;
    const subCategory = category.SubCategories.find(
      (subCategory) => subCategory.id === +value
    );
    setSubCategory(subCategory);
  };

  const handleOnChangeMainPicture = (e) => {
    const { files } = e.target;
    setMainPicture(files[0]);
  };
  const handleOnChangeSubPicture1 = (e) => {
    const { files } = e.target;
    setSubPicture1(files[0]);
  };
  const handleOnChangeSubPicture2 = (e) => {
    const { files } = e.target;
    setSubPicture2(files[0]);
  };
  const handleOnChangeSubPicture3 = (e) => {
    const { files } = e.target;
    setSubPicture3(files[0]);
  };
  const handleOnChangeSubPicture4 = (e) => {
    const { files } = e.target;
    setSubPicture4(files[0]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const {
        data: { product },
      } = await getProductById(productId);
      setProduct(product);
    };
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    const fetchCategories = async () => {
      const {
        data: { categories },
      } = await getAllCategories();
      setCategories(categories);
      setCategory(categories[0]);
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    if (category) {
      setSubCategory(category.SubCategories[0]);
    }
  }, [category]);
  if (product.name) {
    return (
      <FormYup
        onSubmit={handleUpdateSubmit}
        defaultValues={{
          name,
          description,
          quantity,
          price,
          categoryId,
          subCategoryId,
          properties,
        }}
        schema={schema}
      >
        <Header text={'Add new product'}>
          <InputYup
            name="name"
            disabled={!editMode}
            text={'Product name'}
            placeholder="Product name"
          ></InputYup>
          <InputYup
            name="description"
            disabled={!editMode}
            text={'Description'}
            placeholder="Description"
          ></InputYup>
          <InputYup
            name="quantity"
            disabled={!editMode}
            text={'Quantity'}
            placeholder="Quantity"
          ></InputYup>
          <InputYup
            name="price"
            disabled={!editMode}
            text={'Price'}
            placeholder="Price"
          ></InputYup>
          <InputYup
            name="properties"
            disabled={!editMode}
            text={'Properties'}
            placeholder="Properties"
          ></InputYup>
          <div className=" d-flex flex-column gap-2 w-50">
            <label
              htmlFor={`mainPictureInput`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Main picture
            </label>
            <input
              disabled={!editMode}
              className="form-control"
              onChange={handleOnChangeMainPicture}
              id={`mainPictureInput`}
              type="file"
            ></input>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>

          <div className=" d-flex flex-column gap-2 w-50">
            <label
              htmlFor={`subPicture1Input`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Sub picture 1
            </label>
            <input
              disabled={!editMode}
              className="form-control"
              onChange={handleOnChangeSubPicture1}
              id={`subPicture1Input`}
              type="file"
            ></input>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>

          <div className=" d-flex flex-column gap-2 w-50">
            <label
              htmlFor={`subPicture2Input`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Sub picture 2
            </label>
            <input
              disabled={!editMode}
              className="form-control"
              onChange={handleOnChangeSubPicture2}
              id={`subPicture2Input`}
              type="file"
            ></input>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>

          <div className=" d-flex flex-column gap-2 w-50">
            <label
              htmlFor={`subPicture3Input`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Sub picture 3
            </label>
            <input
              disabled={!editMode}
              className="form-control"
              onChange={handleOnChangeSubPicture3}
              id={`subPicture3Input`}
              type="file"
            ></input>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>

          <div className=" d-flex flex-column gap-2 w-50">
            <label
              htmlFor={`subPicture4Input`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Sub picture 4
            </label>
            <input
              disabled={!editMode}
              className="form-control"
              onChange={handleOnChangeSubPicture4}
              id={`subPicture4Input`}
              type="file"
            ></input>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>
          <div className=" d-flex flex-column gap-2" style={{ width: '10%' }}>
            <label
              htmlFor={`categoryInput`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Category
            </label>
            <select
              disabled={!editMode}
              className="form-select"
              onChange={handleOnChangeCategory}
              id={`categoryInput`}
            >
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>
          <div className="d-flex flex-column gap-2" style={{ width: '10%' }}>
            <label
              htmlFor={`subCategoryInput`}
              className="font-text-primary font-weight-500 ms-2"
            >
              Sub category
            </label>
            <select
              disabled={!editMode}
              className="form-select"
              onChange={handleOnChangeSubCategory}
              id={`subCategoryInput`}
            >
              {category.SubCategories.map((subCategory) => {
                return (
                  <option key={subCategory.id} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                );
              })}
            </select>
            <div className="text-danger font-size-8 ms-2">&nbsp;</div>
          </div>
        </Header>
        <Button onClick={handleEditButton} className={'my-btn-primary'}>
          Edit
        </Button>
        <SubmitButtonYup disabled={editMode} className={'btn btn-primary'}>
          Submit
        </SubmitButtonYup>
      </FormYup>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default UpdateProductFormYup;
