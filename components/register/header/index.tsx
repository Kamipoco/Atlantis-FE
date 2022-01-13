import Link from 'next/link';
import { connect } from '../../../src/redux/actions/blockchainActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

export function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.blockchain);
  const { account } = user;
  return (
    <>
      <div className="register-header flex justify-between px-8">
        <img src="/assets/images/logo.png" alt="" />
        <div className="flex justify-center items-center items-center">
          <Link href="#">
            <div
              onClick={() => {
                dispatch(connect());
              }}
              className=" cursor-pointer px-8 flex items-center connect-metamask"
            >
              <p className=" line mr-2">
                {account
                  ? `${account.substring(0, 6)}...${account.substring(
                      account.length - 4,
                    )}`
                  : 'Connect to metamask'}
              </p>
              <img
                src="/assets/images/register/metamask-logo.png"
                alt=""
                className=" w-10 h-10"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
