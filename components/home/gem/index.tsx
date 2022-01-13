export function Gem() {
  return (
    <div className="gem-container">
      <div className="relative">
        <h2 className="text-white font-bold text-center title-text">
          WHAT‘S ATLANTIS GEM?
        </h2>
        <p className="text-white text-center mt-2 gem-desc">
          Atlantis Gem is an exclusive currency that makes players become
          investors.
        </p>
        <div className="flex mt-20">
          <div className="w-3/12 relative">
            <img
              src="/assets/images/home/gem/union-left.png"
              alt="union-left"
              className="union-left"
            />
            <div className="text-center">
              <div className="gem-round">
                <img
                  src="/assets/images/home/gem/market.png"
                  className="mx-auto"
                  alt="market"
                />
              </div>
              <p className="text-white uppercase text-lg font-bold mt-3">
                MARKETPLACE
              </p>
            </div>
            <div className="text-center gem-bottom">
              <div className="gem-round">
                <img
                  src="/assets/images/home/gem/play-to-earn.png"
                  className="mx-auto"
                  alt="play-to-earn"
                />
              </div>
              <p className="text-white uppercase text-lg font-bold mt-3">
                FREE TO EARN
              </p>
            </div>
          </div>
          <div className="w-6/12">
            <img
              src="/assets/images/home/gem/theta-gem.png"
              className="mx-auto"
              alt="theta-gem"
            />
          </div>
          <div className="w-3/12 relative">
            <img
              src="/assets/images/home/gem/union-right.png"
              alt="union-right"
              className="union-right"
            />
            <div className="text-center">
              <div className="gem-round">
                <img
                  src="/assets/images/home/gem/staking.png"
                  className="mx-auto"
                  alt="staking"
                />
              </div>
              <p className="text-white uppercase text-lg font-bold mt-3">
                STAKING
              </p>
            </div>
            <div className="text-center gem-bottom">
              <div className="gem-round">
                <img
                  src="/assets/images/home/gem/evolve-devolve.png"
                  className="mx-auto"
                  alt="evolve-devolve"
                />
              </div>
              <p className="text-white uppercase text-lg font-bold mt-3">
                EVOLVE CHARACTERS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
