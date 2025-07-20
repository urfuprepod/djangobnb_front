import Image from "next/image";
import React, { FC } from "react";

type Props = {
    updateDataImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataImage: File | null;
};

const ImageSection: FC<Props> = (props) => {
    const { dataImage, updateDataImage } = props;

    return (
        <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateDataImage}
                />

                {dataImage && (
                    <div className="w-[200px] h-[150px] relative">
                        <Image
                            fill
                            alt="uploaded image"
                            src={URL.createObjectURL(dataImage)}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageSection;
