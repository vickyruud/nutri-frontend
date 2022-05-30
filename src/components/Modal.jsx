import React from "react";
import LoginForm from "./LoginForm";
import NewComment from "./NewComment";
import SignUp from "./SignUp";

export default function Modal({showModal, setShowModal, login, modalType, register}) {
  return (
    <>    
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {modalType === 'login' && <LoginForm setShowModal={setShowModal} login={login} />}
            {modalType === 'sign-up' && <SignUp setShowModal={setShowModal} register={register} />}
            {modalType === 'new-comment' && <NewComment setShowModal={setShowModal} />}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
