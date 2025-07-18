"use client";

import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useAddPropertyModal } from "@/processes/store/hooks/usePropertyModal";

const AddProeprtyModal = () => {
    const { isOpen, close } = useAddPropertyModal();

    return <Modal isOpen={isOpen} close={close} title="Add property"></Modal>;
};

export default AddProeprtyModal;
