import Image from "next/image";
import { Fragment, ReactNode, FC } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ICharacter } from "./data";
import BackButton from "./back-button.svg";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  character?: ICharacter;
  children: ReactNode;
}

const Modal: FC<IModalProps> = (props) => {
  const { isOpen, onClose, character, children } = props;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[1000] inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex flex-col characters-modal-background absolute inset-0 w-full h-full px-36 py-20">
              <div className="flex justify-between items-start">
                <div
                  className="flex items-center hover:opacity-60 active:opacity-90 cursor-pointer z-10"
                  onClick={onClose}
                >
                  <BackButton />
                  <div className="text-xl text-white ml-8">BACK</div>
                </div>

                <div className="text-center relative">
                  <Image
                    src="/assets/images/home/characters/symbol-brine-shadow.png"
                    width={135}
                    height={120}
                    alt=""
                  />
                  <div className="absolute top-4 text-6xl text-white font-bold uppercase left-1/2 transform -translate-x-1/2">
                    {character?.name}
                  </div>
                </div>
              </div>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
