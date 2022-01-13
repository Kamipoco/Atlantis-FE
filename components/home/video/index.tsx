import { Background } from "../background";

export function Video(props) {
  const { setDisplay } = props;
  function scrollToDownload() {
    document.getElementsByClassName("download")[0].scrollIntoView();
  }
  return (
    <div className="relative pt-40 pb-20 overflow-hidden">
      <div className="video-section px-36 relative z-10">
        <p className="text1">WELCOME TO </p>
        <p className="text2">THE OLYMPUS</p>
        <p className="text3">
          The Olympus is an esport game based on blockchain technology. You can
          gather your friends, form a team, battle with others and earn money
          with just your skills.
        </p>
        <img
          onClick={() => {
            scrollToDownload();
          }}
          src="/assets/images/home/play-now-btn.png"
          alt="play-now-btn"
          className="play-now-btn mt-10 cursor-pointer"
        />
        <div className="main-video mt-40 w-full ">
          <iframe
            width="100%"
            height="650"
            src="https://www.youtube.com/embed/rjFi93miBp8?autoplay=1"
            allow="autoplay"
          ></iframe>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 play-main-video-btn cursor-pointer">
            <img
              src="/assets/images/home/icon-play.png"
              alt="play icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src="/assets/images/home/rounded-play.png"
              alt="rounded play icon"
              className="rounded-play"
              onClick={() => {
                setDisplay(true);
              }}
            />
          </div> */}
          <div className="video-name">
            <div className="line"></div>
            <p className="video-name-text">Season 1 - The Atlantis Trailer</p>
          </div>
        </div>
        <div className="another-video">
          <div
            className="video-item"
            style={{
              clipPath:
                "polygon(0 0, 92% 0, 100% 13%, 100% 100%, 8% 100%, 0 88%)",
            }}
          >
            <div className="video-name">
              <div className="line"></div>
              <div className="video-name-text">Gameplay - PvE</div>
            </div>
            <p className="comming-soon">Comming soon</p>
            <img
              src="/assets/images/home/video-item1.jpg"
              alt="video-item1"
              className="video-item1"
            />
            <div className="blur"></div>
          </div>

          <div
            className="video-item"
            style={{
              clipPath:
                "polygon(0 0, 92% 0, 100% 13%, 100% 100%, 8% 100%, 0 88%)",
            }}
          >
            <div className="video-name">
              <div className="line"></div>
              <div className="video-name-text">Gameplay - Castle</div>
            </div>
            <p className="comming-soon">Comming soon</p>
            <img
              src="/assets/images/home/video-item2.jpg"
              alt="video-item2"
              className="video-item2"
            />
            <div className="blur"></div>
          </div>

          <div
            className="video-item"
            style={{
              clipPath:
                "polygon(0 0, 92% 0, 100% 13%, 100% 100%, 8% 100%, 0 88%)",
            }}
          >
            <div className="video-name">
              <div className="line"></div>
              <div className="video-name-text">Gameplay - Castle</div>
            </div>

            <p className="comming-soon">Comming soon</p>
            <img
              src="/assets/images/home/video-item3.jpg"
              alt="video-item3"
              className="video-item3"
            />
            <div className="blur"></div>
          </div>
        </div>
        <div className="video-section-bottom">
          {/* <div className="arrow ml-8 cursor-pointer">
            <img
              src="/assets/images/home/left-arrow.png"
              alt="left-arrow"
              className="left-arrow "
            />
          </div>
          <div className="arrow ml-4 bg-white cursor-pointer">
            <img
              src="/assets/images/home/right-arrow.png"
              alt="right-arrow.png"
              className="right-arrow"
            />
          </div> */}
        </div>
      </div>
      <Background
        className="bottom-0"
        maskSrc="/assets/images/home/video-mask-bg.png"
        backgroundSrc="/assets/images/home/video-bg.png"
      />
      <img
        src="/assets/images/home/class-logo/atlantis-logo-gray.png"
        alt="atlantis logo"
        className="absolute left-[-19%] top-[20%] h-[530px]"
      />
    </div>
  );
}
