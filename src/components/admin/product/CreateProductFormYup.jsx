import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { useErrorContext } from '../../../contexts/ErrorContext';
import FormYup from '../../layout/form/FormYup';
import Header from '../../layout/form/Header';
import InputYup from '../../layout/form/InputYup';
import SubmitButtonYup from '../../layout/form/SubmitButtonYup';
import InputFileYup from '../../layout/form/InputFileYup';

import { adminCreateProduct } from '../../../api/admin/product';
import { getAllCategories } from '../../../api/admin/category';
import { useEffect, useState } from 'react';

function CreateProductFormYup() {
  const { setError } = useErrorContext();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ SubCategories: [] });
  const [subCategory, setSubCategory] = useState({});

  // console.log(category);
  // console.log(subCategory);

  const schema = yup.object().shape({
    name: yup.string().trim().required('Product name is required'),
    description: yup
      .string()
      .trim()
      .max(400, 'Description must be less than 400 characters')
      .required('Description is required'),
    quantity: yup.number().required('Quantity is required'),
    price: yup.number().required('Price is required'),
    properties: yup
      .string()
      .trim()
      .max(2000, 'Properties must be less than 2000 characters')
      .required('Properties is required'),
  });

  const handleSignUpSubmit = async (data, reset) => {
    try {
      const {
        name,
        description,
        quantity,
        price,
        mainPicture,
        subPicture1,
        subPicture2,
        subPicture3,
        subPicture4,
        properties,
      } = data;
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

      await adminCreateProduct(formData);
      navigate('/admin/product/createProduct/completed');
      reset();
    } catch (err) {
      setError(err.response.data.message);
    }
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

  return (
    <FormYup
      onSubmit={handleSignUpSubmit}
      defaultValues={{
        name: '',
        description: '',
        quantity: '',
        price: '',
        mainPicture: '',
        subPicture1: '',
        subPicture2: '',
        subPicture3: '',
        subPicture4: '',
        categoryId: '',
        subCategoryId: '',
        properties: '',
      }}
      schema={schema}
    >
      <Header text={'Add new product'}>
        <InputYup
          name="name"
          text={'Product name'}
          placeholder="Product name"
        ></InputYup>
        <InputYup
          name="description"
          text={'Description'}
          placeholder="Description"
        ></InputYup>
        <InputYup
          name="quantity"
          text={'Quantity'}
          placeholder="Quantity"
        ></InputYup>
        <InputYup name="price" text={'Price'} placeholder="Price"></InputYup>
        <InputYup
          name="properties"
          text={'Properties'}
          placeholder="Properties"
        ></InputYup>
        <InputFileYup
          name="mainPicture"
          text={'Main picture'}
          placeholder="Main picture"
        ></InputFileYup>
        <InputFileYup
          name="subPicture1"
          text={'Sub picture 1'}
          placeholder="Sub picture 1"
        ></InputFileYup>
        <InputFileYup
          name="subPicture2"
          text={'Sub picture 2'}
          placeholder="Sub picture 2"
        ></InputFileYup>
        <InputFileYup
          name="subPicture3"
          text={'Sub picture 3'}
          placeholder="Sub picture 3"
        ></InputFileYup>
        <InputFileYup
          name="subPicture4"
          text={'Sub picture 4'}
          placeholder="Sub picture 4"
        ></InputFileYup>
        <div className=" d-flex flex-column gap-2" style={{ width: '10%' }}>
          <label
            htmlFor={`categoryInput`}
            className="font-text-primary font-weight-500 ms-2"
          >
            Category
          </label>
          <select
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
      <SubmitButtonYup className={'btn btn-primary'}>Submit</SubmitButtonYup>
    </FormYup>
  );
}

export default CreateProductFormYup;
