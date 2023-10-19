import cn from "classnames"
import s from "./FavouriteButton.module.css"
import AppButton from "@/8Shared/ui/AppButton/AppButton"
import { BootstrapIcon } from "@/8Shared/Icon/BootstrapIcon";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, deleteFromFavourites, setFavouritesList } from "@/Pages/VacancyListPage/model/slice/vacancyListPageSlice";
import { useEffect } from "react";


const FavouriteButton = ({
    favourites,
    id,
    user,
    className,
    ...rest
}) => {
    const dispatch = useDispatch();
    const { favouritesList } = useSelector(state => state.vacancyListPage);
    useEffect(() => {
        dispatch(setFavouritesList(favourites));
    }, []);


    const toggleBtnFavourites = (id) => {
        if (!favouritesList.includes(id)) {

            dispatch(addToFavourites({ user, id }))
        } else {
            dispatch(deleteFromFavourites(id))
        }
        // if (!favouritesList.length) {
        //     setFavouritesList([...favouritesList, id]);

        //     await axios.post('/addLike', { like: { vacancy_id: id } });
        // } else {


        // if (favouritesList.includes(id)) {
        //     setFavouritesList(favouritesList.filter((favourite) => favourite !== id));
        //     await axios.post('/deleteLike', { id: { vacancy_id: id } });

        // } else {
        //     setFavouritesList([...favouritesList, id]);
        //     await axios.post('/addLike', {
        //         like: {
        //             user_id: user.id,
        //             vacancy_id: id
        //         }
        //     });

        // }


        // }
    }
    const isInFavourite = (id, list) => {
        return list.some(el => el === id)
    }
    return (
        <AppButton
            onClick={() => toggleBtnFavourites(id)}
            className={cn(s.favBtn, className)}
            variant={'clear'}
            {...rest}
        >
            {isInFavourite(id, favouritesList) ?
                <BootstrapIcon name={'BsHeartFill'} size={28} color={'tomato'} />
                :
                <BootstrapIcon name={'BsHeart'} color={'var(--primary-text)'} size={28} />
            }

        </AppButton>
    )
}

export default FavouriteButton;