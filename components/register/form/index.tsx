import { useState, useEffect } from 'react';
import { register } from '../../../src/redux/actions/blockchainActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

export function RegisterForm() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.blockchain);

  const [data, setData] = useState({
    username: '',
    password: '',
    walletAddress: '',
  });

  useEffect(() => {
    setData({ ...data, walletAddress: user.account });
  }, [user.account]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(register(data));
  };

  return (
    <div className="flex register-section justify-center p-20 flex-col items-center">
      <p className="register-title uppercase text-2xl mb-20">
        Register account
      </p>
      <form
        action=""
        className="register-form flex flex-col rounded-md"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-7 flex justify-between items-center">
          <label className="mr-5" htmlFor="user-input">
            User Name
          </label>
          <input
            className="p-5 w-80 input-form"
            type="text"
            name="username"
            id="user-input"
            onChange={handleChange}
            placeholder="Enter your user name..."
          />
        </div>
        <div className="form-group mb-7 flex justify-between items-center">
          <label className="mr-5" htmlFor="pass-input">
            Password
          </label>
          <input
            className="p-5 w-80 input-form"
            type="password"
            name="password"
            id="pass-input"
            onChange={handleChange}
            placeholder="Enter your pass word..."
          />
        </div>
        <div className="form-group mb-7 flex justify-between items-center">
          <label className="mr-5" htmlFor="pass-verify-input">
            Verify Password
          </label>
          <input
            className="p-5 w-80 input-form"
            type="password"
            name="verifyPass"
            // onChange={handleChange}
            id="pass-verify-inputuser-input"
            placeholder="Verify your password..."
          />
        </div>
        <button
          type="submit"
          className=" bg-white  register-submit-button  mt-8 rounded-md border-2 py-5 px-8"
        >
          Register
        </button>
      </form>
    </div>
  );
}
