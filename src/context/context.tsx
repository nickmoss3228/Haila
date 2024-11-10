import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props: any) => {

    const contextValue = {
        // toggleModal,
        // activeModal,
        // showModal, 
        // setShowModal,
};  

    return (
    <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
);

}

