import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import cs from 'classnames';
import { connect } from 'src/redux/actions/blockchainActions';
import { RootState } from 'src/redux/store';

const dataLink = [
  {
    name: 'Home',
    path: '/',
    icon: '/assets/images/marketPlace/home-icon.png',
  },
  {
    name: 'Market',
    path: '/market-place',
    icon: '/assets/images/marketPlace/market-icon.png',
  },
  {
    name: 'Genesis Heroes',
    path: '/genesis',
    icon: '/assets/images/marketPlace/market-icon.png',
  },
  {
    name: 'Staking',
    path: '/',
    icon: '/assets/images/marketPlace/trade.png',
  },
  {
    name: 'Buy box',
    path: '/buy-box',
    icon: '/assets/images/marketPlace/strongbox.png',
  },
  {
    name: 'My assets',
    path: '/profile',
    icon: '/assets/images/marketPlace/user-octagon.png',
  },
];

export function SideBar(props) {
  const { pageName } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const blockchain = useSelector((state: RootState) => state.blockchain);
  const { account, errorMsg } = blockchain;

  return (
    <div className="side-bar">
      <img
        src="/assets/images/marketPlace/olympus-logo.png"
        alt="logo"
        className="logo click-enable"
      />
      <div
        className="connect-wallet click-enable"
        onClick={() => {
          dispatch(connect());
        }}
      >
        {account
          ? `${account.substring(0, 6)}...${account.substring(
              account.length - 4,
            )}`
          : 'Connect to metamask'}
      </div>
      {errorMsg && (
        <div className="text-sm text-red-500 font-bold">{errorMsg}</div>
      )}
      <div className="nav-link">
        {dataLink.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <a
                className={cs(
                  'nav-link-item',
                  router.pathname.split('/')[1] === item.path.split('/')[1] ||
                    (router.pathname === '/detail/[id]' && index === 5)
                    ? 'selected'
                    : '',
                )}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="nav-link-item-icon"
                />
                <div className="nav-link-item-title">{item.name}</div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
