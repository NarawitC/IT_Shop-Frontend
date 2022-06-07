import axios from '../../config/axios';
import { useRef } from 'react';

function SignInForm() {
  const email = useRef();
  const password = useRef();
  const handleSignInBtn = async (e) => {
    e.preventDefault();
    await axios.post('auth/signIn', {
      email: email.current.value,
      password: password.current.value,
    });
  };
  return (
    <>
      <div
        className="p-3 py-4 d-flex flex-column gap-3 bg-light1"
        style={{ width: '400px' }}
      >
        <div className="font-size-24 font-text-primary font-weight-500">
          &lt;Sign In/&gt;
        </div>
        <div className="bg-primary" style={{ height: '0.2rem' }}></div>
        <div className="col d-flex flex-column gap-2">
          <label htmlFor="emailInput" className="font-text-primary ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="email@example.com"
            ref={email}
          />

          <label htmlFor="passwordInput" className="font-text-primary ">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            ref={password}
          />
        </div>
        <hr />
        <div className="col">
          <button className="btn-primary" onClick={handleSignInBtn}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
