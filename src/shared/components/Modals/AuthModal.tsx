"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { CustomButton, CustomInput } from "../Forms";
import { useRouter } from "next/navigation";
import { authorize } from "@/entities/User/api";
import { useLoginModal, useUserData } from "@/processes/store/hooks";
import ErrorMessage from "../ErrorMessage";

const AuthModal = () => {
    const router = useRouter();
    const { close, isOpen, type, updateModalConfig, fields } = useLoginModal();
    const { setId } = useUserData();
    const [state, formAction] = useActionState(
        async (previousState: Record<string, string>, formData: FormData) => {
            setError("");
            const object: Record<string, string> = {};
            for (const [key, value] of formData.entries()) {
                object[key] = String(value);
            }
            if (!Object.keys(object).length) return {};
            const errors = await authorize(formData, type, setId);
            if (errors.length) {
                setError(errors.join("\n"));
            } else {
                close();
                updateModalConfig([], "none");
                router.push("/");
            }
            return object;
        },
        {}
    );

    const ref = useRef<HTMLFormElement>(null);

    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!isOpen) {
            ref.current?.reset();
            updateModalConfig([], "none");
            setError("");
            resetState();
        }
    }, [isOpen]);

    const resetState = () => {
        const formData = new FormData(); // empty form
        formAction(formData); // call the action manually
    };

    return (
        <Modal isOpen={isOpen} close={close} title={type}>
            <form ref={ref} action={formAction} className="space-y-4">
                {fields.map((item, id) => (
                    <CustomInput
                        name={item.name}
                        key={id}
                        placeholder={item.placeholder}
                        type={item.type}
                        defaultValue={state[item.name]}
                    />
                ))}

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <CustomButton type="submit">{type}</CustomButton>
            </form>
        </Modal>
    );
};

export default AuthModal;
