import React, { FC } from "react";
import classNames from "classnames";
import { Heart } from "lucide-react";


type Props = {
    id: string;
    is_favorite: boolean;
    markFavorite?: (val: string) => void;
};

const FavoriteButton: FC<Props> = (props) => {
    const { id, is_favorite, markFavorite } = props;

    return (
        <button
            onClick={() => markFavorite?.(id)}
            className={classNames(`absolute top-2 right-2 hover:text-airbnb`, {
                "text-airbnb": is_favorite,
                "text-white": !is_favorite,
            })}
        >
            <Heart color={is_favorite ? "#ff385c" : "#fff"} />
        </button>
    );
};

export default FavoriteButton;
