import { useRouter } from "next/dist/client/router";

export function Introduction() {
  const router = useRouter();
  return (
    <div className="intro-container" >
      <div className="flex relative">
        <div className="w-6/12 mb-32">
          <img
            src="/assets/images/home/intro-character.png"
            className="intro-image "
          />
        </div>

        <div className="w-6/12 ">
          <h1 className="intro-title text-secondary mt-24 mb-0 font-bold text-right " > ATLANTIS</h1>
          <h1 className="intro-sub-title text-white m-0 font-bold text-right" >HOT NFT GAME IN 2021</h1>
          <p className=" text-white intro-description text-right ml-auto mt-6">Atlantis is an esport game based on blockchain technology.
            You can gather your friends, form a team, battle with others and earn money with just your skills.
          </p>
          <h1 className="font-semibold text-xl intro-title-trailer text-white mt-16 "> GAME TRAILER</h1>
          <div className="trailer-container mt-6">
            <img src="/assets/images/home/intro-trailer.png"
              className="w-full"
            />
            <button className="trailer-button absolute top-1/2 left-1/2 flex items-center justify-center w-20 h-20 border-2 border-white rounded-full play-circle">
              <img
                src="/assets/images/icons/arrow-right-yellow.png"
                alt="arrow-right-yellow"
                className="ml-2"
              />
            </button>

          </div>
          {/* <div className="flex relative trailer-section-right">
            <img src="/assets/images/home/intro-line.png" className="absolute trailer-section-right-line" />
            <button className="trailer-square-button flex items-center justify-center border-l-2 border-b-2 border-t-2">
              <img
                src="/assets/images/icons/arrow-right-yellow.png"
                alt="arrow-right-yellow"
                className="ml-2 w-6 h-6"
              />
            </button>
            <button className="flex items-center justify-center trailer-watch__video">
              <span className="text-white mr-2 font-semibold">WATCH VIDEO</span>
              <img src="/assets/images/icons/arrow-right.png" alt="arrow-right" />
            </button>
          </div> */}


        </div>
      </div>

    </div>);
}
