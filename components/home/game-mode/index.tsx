export function GameMode() {
  return (
    <div className="game-mode-section">
      <div className="section-title flex-col flex relative mb-36">
        <p className="game-mode-title">game mode</p>
        <p className="game-mode-sub-title">THE ATLANTIS</p>
        <img
          className="game-mode-line1 absolute left-0 bottom-0"
          src="/assets/images/home/game-mode-line1.png"
          alt="line1"
        />
      </div>

      {/* PVE */}
      <div className="flex mb-80 relative">
        <img
          className="mr-20"
          src="/assets/images/home/pve-mode.png"
          alt="pve mode"
        />
        <div className="flex flex-col relative">
          <p className="theAtlantis text-secondary">THE ATLANTIS</p>
          <p className="mode-sub-title">PvE battle mode</p>
          <img
            className=" w-40 mt-8 mb-4"
            src="/assets/images/home/process-line.png"
            alt=""
          />
          <p className="mode-text">
            There is a monster map of increasing difficulty levels
          </p>
          <p className="mode-text">
            Players who pass each map will receive gold to upgrade champions
          </p>
          <p className="mode-text">Stamina: energy to play games</p>
          <p className="mode-text">No extra charge for buying energy</p>
          <p className="mode-text">4 vs 4 but fight 3-6 monsters (sorted)</p>
          <p className="mode-text">Limited to 40 levels</p>
          <p className="mode-text">
            Phase 1 requires the first 10 levels to test
          </p>
        </div>
        <img
          src="/assets/images/home/game-mode-line2.png"
          className=" left-0 top-2/3 absolute"
          alt=""
        />
      </div>

      {/* PVP */}
      <div className="flex mb-80 relative">
        <div className="flex flex-col relative mr-20 w-6/12">
          <p className="mode-sub-title">PvP battle mode</p>
          <p className="theAtlantis text-secondary">THE ATLANTIS</p>
          <img
            className=" w-40 mt-8 mb-4"
            src="/assets/images/home/process-line.png"
            alt=""
          />
          <p className="mode-text">
            A place where players can play against each other in a token bet
          </p>
          <p className="mode-text">
            Players will create a formation room and place a certain number of
            tokens
          </p>
          <p className="mode-text">
            Participants will be able to choose the formation to join the battle
          </p>
          <p className="mode-text">
            After the participant presses start, the battle starts automatically
          </p>
          <p className="mode-text">
            The winner will get about 95% of the stake and 5% to the publisher
          </p>
          <p className="mode-text">Gameplay 4 vs 4</p>
          <p className="mode-text">
            Room creators will place 4 cards but are allowed to hide 1
            unrevealed
          </p>
          <p className="mode-text">piece to be fair</p>
        </div>
        <div className="img-pvp w-6/12">
          <div className=" pvp-review-border"></div>
          <div className=" pvp-review w-full"></div>
        </div>
      </div>

      {/* CASTLE */}
      <div className="flex mb-12 relative">
        <img
          className="mr-20"
          src="/assets/images/home/castle-mode-img.png"
          alt="castle"
        />
        <div className="flex flex-col relative">
          <p className="theAtlantis text-secondary">THE ATLANTIS</p>
          <p className="mode-sub-title">castle</p>
          <img
            className=" w-40 mt-8 mb-4"
            src="/assets/images/home/process-line.png"
            alt=""
          />
          <p className="mode-text">Each player can upgrade his castle</p>
          <p className="mode-text">
            Siege can buy more or upgrade weapons to bonus all the stats for the
            characters
          </p>
          <p className="mode-text">
            Other players can bring troops to attack the castle to steal
            resources
          </p>
          <p className="mode-text">
            The goalkeeper can also buy more or upgrade weapons in the city for
            defense
          </p>
          <p className="mode-text">Gameplay 4 vs 4</p>
          <div className="view-mode-line left-10 top-2/3 absolute flex align-bottom">
            <img src="/assets/images/home/game-mode-line3.png" alt="" />
            <p className="view-more-text absolute bottom-0 right-0">
              view more
            </p>
          </div>
        </div>
      </div>

      <div className="mode-map justify-end flex relative mb-40">
        <img src="/assets/images/home/mode-map3.png" className="mr-8" alt="" />
        <img src="/assets/images/home/mode-map2.png" className="mr-8" alt="" />
        <img src="/assets/images/home/mode-map1.png" alt="" />
        <img
          src="/assets/images/home/game-mode-line4.png"
          className=" absolute top-0 left-0"
          alt=""
        />
      </div>

      <div className="flex mb-80 relative">
        <div className="flex flex-col relative mr-20">
          <p className="mode-sub-title">Clan battle mode</p>
          <p className="theAtlantis text-secondary">THE ATLANTIS</p>
          <img
            className=" w-40 mt-8 mb-4"
            src="/assets/images/home/process-line.png"
            alt=""
          />
          <p className="mode-text">
            Each clan member will have 2 turns in 1 day
          </p>
          <p className="mode-text">Each member has 2 turns of defense</p>
          <p className="mode-text">
            Calculate the distribution of power so that everyone can win
          </p>
          <p className="mode-text">Gameplay 4 vs 4</p>
          <p className="mode-text">
            The members have to split up to see which house to fight to get the
            most points
          </p>
        </div>
        <div className="img-pvp">
          <div className=" clan-review-border"></div>
          <div className=" clan-mode-review"></div>
        </div>
      </div>
    </div>
  );
}
