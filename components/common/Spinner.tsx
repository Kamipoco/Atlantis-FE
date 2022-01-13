import cs from 'classnames';

const Spinner = ({ className }: { className?: string }) => (
  <div className={cs('flex items-center justify-center', className)}>
    <div className="w-40 h-40 border-t-4 border-b-4 border-gray-400 rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
