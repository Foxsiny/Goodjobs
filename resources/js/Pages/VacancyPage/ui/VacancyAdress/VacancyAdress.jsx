import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import s from "./VacancyAdress.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppText from "@/8Shared/ui/AppText/AppText";
import cn from "classnames";
import Map from "./Map";

function VacancyAdress(props) {
    const { className, adress } = props;
    // MAP
    const [x, setX] = useState(55.70104408991864);
    const onXChange = (e) => setX(e.target.value);

    const [y, setY] = useState(37.70837356154336);
    const onYChange = (e) => setY(e.target.value);

    const [zoom, setZoom] = useState(17);
    const onZoomChange = (e) => setZoom(e.target.value);

    const options = useMemo(
        () => ({
            center: [x, y],
            zoom,
        }),
        [x, y, zoom]
    );

    return (
        <div className={cn(s.vacancyAdress, className)}>
            <AppText title="Адрес" bold />
            <AppText text={adress?.strAdress} size="m" className={s.text} />
            {/* <div className={s.mapStub}>
                <AppText
                    title="Тут будет карта"
                    variant="secondary"
                    size="xl"
                />
            </div> */}

            {adress?.coordinates ? (
                <>
                    <Map
                        className={s.map}
                        width={1200}
                        height={300}
                        options={options}
                    />
                    <AppButton variant="clear" width="content-width">
                        <AppText
                            text="Показать на большой карте"
                            variant="accent"
                            size="s"
                        />
                    </AppButton>
                </>
            ) : null}
        </div>
    );
}

VacancyAdress.propTypes = {};

export default VacancyAdress;
