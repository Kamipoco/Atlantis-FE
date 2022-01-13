import cs from 'classnames';
import Image from 'next/image';
import Title from '../components/Title';
import data from './data';

export function Roadmap() {
  return (
    <div className="roadmap-section py-20 relative z-10">
      <div className="mx-auto flex flex-col items-center px-8">
        <Title text="Roadmap" className="mb-8" />
        <p className="mb-20 text-white">
          The Olympus ultimate goal is to provide a unique experience, full of
          fun and thrilling moments for all players.
        </p>
        <div className="roadmap-video-wrapper relative">
          <video autoPlay muted loop className="w-full">
            <source
              src="/assets/images/home/roadmap-video.mp4"
              type="video/mp4"
            />
          </video>

          <div
            className="absolute top-0 bottom-0 left"
            style={{ left: '12%', right: '13%' }}
          >
            <Milestone
              title="Phase 1"
              items={data[0]}
              className="left-0"
              isAtBottom
            />
            <Milestone title="Phase 2" items={data[1]} className="left-1/4" />
            <Milestone
              title="Phase 3"
              items={data[2]}
              className="left-1/2"
              isAtBottom
            />
            <Milestone title="Phase 4" items={data[3]} className="left-3/4" />
          </div>
        </div>
      </div>
      <div className="absolute w-[800px] h-[997px] top-0 right-0 mt-[-200px] overflow-hidden z-[-1]">
        <img src="/assets/images/home/class-logo/fishermen-logo-gray.png" alt="fishermen logo" className="absolute right-[-40%]" />
      </div>
    </div>
  );
}

interface IMilestoneProps {
  title: string;
  items: Array<{ time: string; description: string }>;
  className?: string;
  isAtBottom?: boolean;
}

const Milestone = ({
  title,
  items,
  className,
  isAtBottom = false,
}: IMilestoneProps) => {
  const isAtTop = !isAtBottom;
  return (
    <div
      className={cs(
        'absolute h-2/5 flex gap-4',
        {
          'top-1/2': isAtBottom,
          'bottom-1/2': isAtTop,
        },
        className,
      )}
    >
      <Border />
      <div className={cs({ 'mt-36': isAtBottom })}>
        <p className="text-yellow text-lg font-bold mb-3">{title}</p>
        <ul className="w-96">
          {items.map(({ time, description }) => (
            <li
              className="text-white text-sm flex gap-4 mb-3"
              key={description}
            >
              <div className="font-bold">{time}:</div>
              <div className="">{description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Border = () => (
  <div className="h-full flex flex-col items-center gap-3">
    <div className="bg-yellow border-point -mt-1"></div>
    <div className="border-l border-dashed border-white flex-1"></div>
    <div className="bg-yellow border-point -mb-1"></div>
  </div>
);
