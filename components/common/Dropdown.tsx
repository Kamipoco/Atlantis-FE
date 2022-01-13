import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import cs from 'classnames';
import ArrowDown from 'src/assets/icons/arrow-down.svg';

interface IProps<T = string> {
  value: T | undefined;
  onChange: (newValue: T) => void;
  options: Array<{ value: T; label: string }>;
  placeholder: string;
}

const Dropdown = <T,>(props: IProps<T>) => {
  const { value, onChange, options, placeholder = '-- Select --' } = props;

  const selectedOption = options.find((option) => option.value === value);

  return (
    <Listbox
      value={value}
      onChange={onChange}
      as="div"
      className="relative inline-block text-left"
    >
      <Listbox.Button className="flex justify-between min-w-[150px] items-center rounded-lg px-4 py-3 bg-[#2e303d] hover:bg-gray-700 text-white gap-8">
        {selectedOption ? selectedOption.label : placeholder}
        <ArrowDown />
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#2E303D] ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <Listbox.Option
            value={undefined}
            className={cs(
              'block px-4 py-2 text-md cursor-pointer text-white hover:bg-[#767885]',
            )}
          >
            All
          </Listbox.Option>
          <hr className="my-2 mx-4" />
          {options.map((option) => (
            <Listbox.Option
              key={option.value as any}
              value={option.value}
              className={cs(
                'block px-4 py-2 text-md cursor-pointer text-white hover:bg-[#767885]',
                {
                  'font-bold bg-gray-700': value === option.value,
                },
              )}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};
export default Dropdown;
