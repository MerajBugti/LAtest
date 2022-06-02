import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function AppWrapper({ children }) {
const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[modalOpen, setModalOpen]}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}