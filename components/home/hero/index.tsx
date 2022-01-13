import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { Header } from '../header';
import { navLinks } from './data';

export function Hero() {
  const router = useRouter();

  return (
    <div className="hero-container">
      <Header />
      <div className="flex relative z-10 h-full hero-content">
        <nav>
          <Link href="/">
            <a className="home-header__logo block">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                className="w-full"
              />
            </a>
          </Link>
          <div className="inline-flex flex-col mt-12">
            {navLinks.map((item, index) => (
              <Link href={item.path} key={item.id}>
                <a
                  className={`inline-block pl-8 font-bold text-white nav-link hover:text-primary transition-all duration-200${
                    index === 0 ? '' : ' mt-8'
                  }${router.pathname === item.path ? ' nav-link__active' : ''}`}
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </div>
        </nav>
        <div className="ml-6 relative">
          <h1 className="hero-title text-white">ATLANTIS</h1>
          <p className="text-white opacity-80 hero-description">
            Atlantis is an esport game based on blockchain technology. You can
            gather your friends, form a team, battle with others and earn money
            with just your skills.
          </p>
          <Link href="/register">
            <div className=" cursor-pointer flex items-center justify-center hero-play__now">
              <span className="text-white mr-2 font-semibold">PLAY NOW</span>
              <img
                src="/assets/images/icons/arrow-right.png"
                alt="arrow-right"
              />
            </div>
          </Link>
        </div>
      </div>
      <img
        src="/assets/images/home/hero-character.png"
        alt="hero-character"
        className="hero-image"
      />
    </div>
  );
}
