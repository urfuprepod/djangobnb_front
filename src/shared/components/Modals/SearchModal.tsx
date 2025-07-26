"use client";

import { useSearchModal } from "@/processes/store/hooks";
import React, { useState } from "react";
import Modal from "./Modal";
import { SelectCountry } from "../Forms";

const SearchModal = () => {
    const { isOpen, close } = useSearchModal();
    const [country, setCountry] = useState()
 
    return <Modal isOpen={isOpen} title="Search" close={close}></Modal>;
};

export default SearchModal;
