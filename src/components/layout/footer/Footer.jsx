import ITShop from '../logo/ITShop';

import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();

  return (
    <footer className=" bg-dark2 font-text3">
      <section className="content-default-width py-3 mx-auto ">
        <ITShop color={'white'}></ITShop>
        <div
          className="d-flex justify-content-evenly"
          style={{ width: '170px' }}
        >
          <button className="btn-white-i" onClick={() => navigate('/facebook')}>
            <i
              className="fa-brands fa-facebook-square"
              style={{ fontSize: '20px' }}
            ></i>
          </button>
          <button
            className="btn-white-i"
            onClick={() => navigate('/instagram')}
          >
            <i
              className="fa-brands fa-instagram"
              style={{ fontSize: '20px' }}
            ></i>
          </button>
          <button className="btn-white-i" onClick={() => navigate('/line')}>
            <i className="fa-brands fa-line" style={{ fontSize: '20px' }}></i>
          </button>
        </div>
      </section>

      <section className="d-flex justify-content-between content-default-width mx-auto gap-5 font-size-8  ">
        <div className="col">
          <h6 className="text-decoration-underline mb-3">About us</h6>
          <div className=" d-flex flex-column gap-3">
            <div className="d-flex">
              <i className="fa-solid fa-circle-info font-size-8 mt-1 me-2 underline"></i>
              <div className="font-size-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                dolorem magni officiis voluptate natus, nemo mollitia cumque
                consectetur incidunt veritatis.
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h6 className="text-decoration-underline mb-3">Contact us</h6>
          <div className=" d-flex flex-column gap-3">
            <div className="d-flex">
              <i className="fa-solid fa-phone font-size-8 mt-1 me-2 underline"></i>
              <p>099-999-9999</p>
            </div>
          </div>
        </div>
        <div className="col">
          <h6 className="text-decoration-underline mb-3">
            Payment and Delivery
          </h6>
          <div className=" d-flex flex-column ">
            <div className="d-flex">
              <i className="fa-solid fa-money-check-dollar font-size-8 mt-1 me-2 underline"></i>
              <p>bank transfer</p>
            </div>
            <div className="d-flex">
              <i className="fa-solid fa-truck font-size-8 mt-1 me-2 underline"></i>
              <p>
                Mint tower, 719 Banthat Thong Road, Wang Mai Subdistrict, Pathum
                Wan District, Bangkok 10330
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center pb-3 font-size-8">
        © 2021 Copyright:&nbsp;
        <a className="link-text1 font-size-8" href="/">
          IT_Shop.com
        </a>
      </section>
    </footer>
  );
}

export default Footer;
