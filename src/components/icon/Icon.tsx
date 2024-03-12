import React from 'react';
import IconsSprite from './../../assets/images/sprite-list.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    color?: string

}

export const Icon: React.FC<IconPropsType> = (props:IconPropsType) => {
    return (
        <svg width={props.width||"35"}
             height={props.height ||"35"}
             viewBox={props.viewBox || "0 0 35 35"}
             fill="transparent"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
        <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

