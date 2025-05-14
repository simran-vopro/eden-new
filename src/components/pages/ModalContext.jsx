import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [service, setService] = useState(null);
  const [goToStep, setGoToStep] = useState(null);

  console.log(service, goToStep);

  const openContactModal = ({ service = null, step = null } = {}) => {
    setService(service);
    setGoToStep(step);
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
    setService(null);
    setGoToStep(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        service,
        goToStep,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
