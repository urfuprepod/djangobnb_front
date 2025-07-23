"use client";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useAddPropertyModal } from "@/processes/store/hooks/usePropertyModal";
import { CustomButton } from "../Forms";
import Categories from "@/components/AddProperty/Categories";
import Description from "@/components/AddProperty/Description";
import { DetailsConfig } from "@/entities/AddProperty/types";
import Details from "@/components/AddProperty/Details";
import { SelectCountryType } from "@/shared/types";
import Location from "@/components/AddProperty/Location";
import ImageSection from "@/components/AddProperty/Image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProperty } from "@/entities/Properties/api";
import ErrorMessage from "../ErrorMessage";

const titles = [
    "Choose category",
    "Describe your place",
    "Details",
    "Location",
    "Image",
];

type DescriptionConfig = {
    title: string;
    description: string;
};

const AddProeprtyModal = () => {
    const { isOpen, close } = useAddPropertyModal();
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [dataCategory, setDataCategory] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [description, setDescription] = useState<DescriptionConfig>({
        title: "",
        description: "",
    });
    const [detials, setDetails] = useState<DetailsConfig>({
        price: 0,
        bedrooms: 1,
        guests: 1,
    });
    const queryClient = useQueryClient();
    const [dataCountry, setDataCountry] = useState<null | SelectCountryType>(
        null
    );
    const [dataImage, setDataImage] = useState<File | null>(null);

    const updateDataImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const tmpImage = e.target.files[0];
            setDataImage(tmpImage);
        } else {
            setDataImage(null);
        }
    };

    function updateDescription(val: string, key: keyof DescriptionConfig) {
        setDescription((prev) => ({ ...prev, [key]: val }));
    }

    function resetDescription() {
        setDescription({
            title: "",
            description: "",
        });
    }

    function updateDetails(val: number, key: keyof DetailsConfig) {
        setDetails((prev) => ({ ...prev, [key]: val }));
    }

    function resetDetails() {
        setDetails({
            price: 0,
            bedrooms: 1,
            guests: 1,
        });
    }

    const mutation = useMutation({
        mutationFn: createProperty,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["properties"] });
        },
        onError: (val: string) => {
            setError(val);
        },
    });

    const submitForm = async () => {
        const formData = new FormData();
        formData.append("category", dataCategory);
        formData.append("title", description.title);
        formData.append("description", description.description);
        formData.append("price_per_night", String(detials.price));
        formData.append("bedrooms", String(detials.bedrooms));
        formData.append("guests", String(detials.guests));
        if (dataCountry) {
            formData.append("country_code", dataCountry.value);
            formData.append("country", dataCountry.label);
        }
        if (dataImage) formData.append("image", dataImage);

        mutation.mutate(formData);
        close();
    };

    useEffect(() => {
        setError("");
    }, [currentStep]);

    return (
        <Modal isOpen={isOpen} close={close} title="Add property">
            <h2 className="mb-6 text-2xl">{titles[currentStep - 1]}</h2>

            {currentStep === 1 && (
                <Categories
                    dataCategory={dataCategory}
                    updateCategory={setDataCategory}
                />
            )}

            {currentStep === 2 && (
                <Description
                    value={description}
                    updateValue={updateDescription}
                    resetValue={resetDescription}
                />
            )}

            {currentStep === 3 && (
                <Details
                    resetDetails={resetDetails}
                    updateDetails={updateDetails}
                    details={detials}
                />
            )}

            {currentStep === 4 && (
                <Location value={dataCountry} onChange={setDataCountry} />
            )}

            {currentStep === 5 && (
                <ImageSection
                    updateDataImage={updateDataImage}
                    dataImage={dataImage}
                />
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="flex gap-2">
                {currentStep > 1 && (
                    <CustomButton
                        className="flex-auto bg-black hover:bg-gray-800"
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                    >
                        Back
                    </CustomButton>
                )}

                {titles.length !== currentStep && (
                    <CustomButton
                        className="flex-auto"
                        onClick={() => setCurrentStep((prev) => prev + 1)}
                    >
                        Next
                    </CustomButton>
                )}

                {titles.length === currentStep && (
                    <CustomButton
                        className="flex-auto"
                        onClick={() => submitForm()}
                    >
                        Submit
                    </CustomButton>
                )}
            </div>
        </Modal>
    );
};

export default AddProeprtyModal;
