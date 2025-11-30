import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export function UIProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(null);

    const showModal = (content) => setModal(content);
    const closeModal = () => setModal(null);

    return (
        <UIContext.Provider
            value={{
                loading,
                setLoading,
                modal,
                showModal,
                closeModal,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export const useUI = () => useContext(UIContext);
