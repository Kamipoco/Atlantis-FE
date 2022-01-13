import Link from "next/link";
import Image from "next/image";
import BackToTopArrow from "./back-to-top-arrow.svg";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer-container ">
      <div className="partner-section-footer flex-col">
        <h2 className="justify-center font-bold font mb-20 title-secondary text-center">
          INVESTORS & PARTNERS
        </h2>
        <div className="partners flex-col mb-20">
          <div className="flex justify-between mb-20">
            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer"
                src="/assets/images/partners/partner1.png"
                alt="partner1"
              />
            </Link>

            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer"
                src="/assets/images/partners/partner2.png"
                alt="partner2"
              />
            </Link>

            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer"
                src="/assets/images/partners/partner3.png"
                alt="partner3"
              />
            </Link>

            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer"
                src="/assets/images/partners/partner4.png"
                alt="partner4"
              />
            </Link>
          </div>
          <div className="flex justify-between">
            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer "
                src="/assets/images/partners/partner5.png"
                alt="partner1"
              />
            </Link>

            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer partner-image"
                src="/assets/images/partners/partner6.png"
                alt="partner2"
              />
            </Link>
            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer partner-image"
                src="/assets/images/partners/partner7.png"
                alt="partner3"
              />
            </Link>
            <Link href="#" passHref>
              <img
                className="object-contain cursor-pointer partner-image"
                src="/assets/images/partners/partner8.png"
                alt="partner4"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="download flex flex-col items-center relative">
        <p className="download-title">FREE DOWNLOAD, NOW !</p>
        <p className="download-text">
          Atlantis is an esport game based on blockchain technology. You can
          gather your friends, form a team, battle with others and earn money
          with just your skills.
        </p>
        <div className="flatform flex justify-between gap-56">
          <div className="flex-1">
            <p className="platform-title">desktop platform: </p>
            <div className="flex gap-10">
              <Link href="#" passHref>
                <img
                  src="/assets/images/footer/OS-download.png"
                  className="cursor-pointer"
                  alt=""
                />
              </Link>
              <Link href="#" passHref>
                <img
                  src="/assets/images/footer/Win-download.png"
                  className="cursor-pointer"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <p className="platform-title">mobile platform: Scan QR code</p>
            <div className="flex justify-between">
              <div className="w-4/12">
                <img src="/assets/images/footer/android-qr.png" alt="" />
                <div className="flex justify-center gap-2 mt-8">
                  <img src="/assets/images/footer/android-logo.png" alt="" />
                  <p className="brand-name">Android</p>
                </div>
              </div>
              <div className="w-4/12">
                <img src="/assets/images/footer/iOS-qr.png" alt="" />
                <div className="flex justify-center gap-2 mt-8">
                  <img src="/assets/images/footer/iOS-logo.png" alt="" />
                  <p className="brand-name">iOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/home/class-logo/xebel-logo-gray.png"
          alt="xebel logo"
          className="absolute bottom-[-20%] left-[-11%] h-[500px]"
        />
      </div>

      <div className="footer-bottom relative">
        <div className="footer-background">
          <div className="mx-auto mt-16 flex flex-col items-center ">
            <BackToTopArrow />
            <p
              className="back-to-top mt-2 transform hover:scale-110"
              onClick={scrollToTop}
            >
              Back To Top
            </p>
          </div>
        </div>

        <div className="flex justify-between items-start relative max-w-7xl mx-auto pb-9 border-b border-black border-opacity-50 pt-5">
          <Image
            src="/assets/images/footer/footer-logo.png"
            alt="logo"
            width={277}
            height={221}
            sizes="277px"
            layout="intrinsic"
          />
          <div className="nav-bar">
            <p className="footer-bottom-title mb-4">QUICK LINKS</p>
            <div className="footer-nav-links">
              <Link href="#" passHref>
                <p className=" cursor-pointer footer-nav-link">Home</p>
              </Link>
              <Link href="#" passHref>
                <p className=" cursor-pointer footer-nav-link">Whitepaper</p>
              </Link>
              <Link href="#" passHref>
                <p className=" cursor-pointer footer-nav-link">Pitch Deck</p>
              </Link>
              <Link href="#" passHref>
                <p className=" cursor-pointer footer-nav-link">Marketplace</p>
              </Link>
              <Link href="#" passHref>
                <p className=" cursor-pointer footer-nav-link">FAQs</p>
              </Link>
            </div>
            <div className="footer-contact-us flex mt-9">
              <p className="footer-bottom-title mr-4">Contact us:</p>
              <Link href="#" passHref>
                <p className="footer-nav-link">hello@atlantis.io</p>
              </Link>
            </div>
          </div>
          <div className="nav-bar">
            <p className="footer-bottom-title mb-4">
              Community & Social Channels
            </p>
            <div className="footer-social-nav-links flex">
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social1.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social2.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social3.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social4.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social5.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social6.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link mr-4"
                  src="/assets/images/footer/social7.png"
                />
              </Link>
              <Link href="#" passHref>
                <img
                  className=" cursor-pointer footer-social-nav-link"
                  src="/assets/images/footer/social8.png"
                />
              </Link>
            </div>
            <p className="footer-bottom-title mt-14 mb-4">Join Newsletter</p>
            <form className="border border-black border-opacity-30 rounded-full flex p-2 h-14">
              <input
                type="email"
                className="flex-1 letter-input focus:outline-none"
                placeholder="Email addres"
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-6 rounded-full uppercase text-sm"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="copy-right  relative">
          Copyright @Atlantis Game 2021
        </div>
      </div>
    </footer>
  );
}
