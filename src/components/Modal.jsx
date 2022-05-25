import React from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

export default function Modal({showModal, setShowModal, login, modalType, register}) {
  return (
    <>    
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {modalType === 'login' ? <LoginForm setShowModal={setShowModal} login={login} /> : <SignUp setShowModal={setShowModal} register={register} /> }
              
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
