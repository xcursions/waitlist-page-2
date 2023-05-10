import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiFillFacebook, AiOutlineClose, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";

import { TwitterIcon } from "../../public/images/twitter";
import Link from "next/link";
export default function WaitListModal({ isOpen, email, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }
  const [buttonText, setButtonText] = useState("Copy");
  const CopyLink = (text) =>{
    navigator.clipboard.writeText(text)
    setButtonText("Copied!"); // update button text to indicate copied
    setTimeout(() => setButtonText("Copy"), 3000); // change button text back to "Copy" after 3 seconds
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative overlay " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex  min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full design max-w-lg  transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl flex space-y-6 flex-col font-bold leading-6 text-white "
                  >
                    <div className="flex items-end justify-end">
                      <button
                        onClick={closeModal}
                        className="w-fit p-2 bg-white rounded-[5px]"
                      >
                        <AiOutlineClose className="text-black text-lg" />
                      </button>
                    </div>
                    <h4 className="text-center text-4xl">
                      Congratulations! You're In
                    </h4>
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col  items-center text-white">
                    <p className="text-center">
                      {email} has been successfully added to the
                      waitlist.
                    </p>
                    <div className="w-full h-[2px] mb-6 mt-2 bg-white">

                    </div>

                    {/* <p>3,191 people are ahead of you</p> */}
                    <p>The more you share the sooner you&apos;ll get access</p>
                  </div>

                  <div className="mt-4 flex flex-col">
                   <div className="flex justify-between gap-3 md:flex-row flex-col">
                   <div className="bg-white break-words flex-1  p-2 rounded-md ">
                      {/* <p className="text-center">Xcursions.ng/claim/{email}</p> */}
                      <p className="text-center text-sm break-words line-clamp-2">Xcursions.ng/ref_email={email}</p>
                    </div>
                    
                      <button
                      onClick={() =>CopyLink(`Xcursions.ng/ref_email=${email}`)}
                       className="bg-white px-4 py-2 rounded-md">{buttonText}</button>
                    
                   </div>

                    <div className="my-3 flex flex-col  gap-3 md:flex-rwo justify-between">
                      <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fxcursion.ng&text=I%20just%20joined%20Xcursion%20waitlist%2C%20you%20can%20also%20join%20using%20the%20link" target="_blank">
                      <div className="bg-white flex items-center gap-3 px-3 py-2 rounded-md">
                        <AiOutlineTwitter className="text-xl" />
                        Twitter
                      </div>
                      </a>
                      <a href="https://web.whatsapp.com/send?text=www.google.com" target="_blank">
                      <div className="bg-white flex items-center gap-3 px-3 py-2 rounded-md">
                        <AiOutlineWhatsApp className="text-xl" />
                        Whatsapp
                      </div>

                      </a>


                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
