import React, { FC } from "react";
import Image from "next/image";
import { detailPageImageClass } from "./constants";

type Props = {
    src: string;
    alt: string;
    sizes?: string;
};

const DetailPageImage: FC<Props> = (props) => {
    const { src, alt, sizes } = props;

    return (
        <Image
            src={src}
            sizes={sizes}
            fill
            alt={alt}
            className={detailPageImageClass}
        />
    );
};

export default DetailPageImage;
