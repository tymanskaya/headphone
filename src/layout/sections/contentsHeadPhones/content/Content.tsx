import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../content/Content_Style"

type ContentPropsType = {
    text: string;
}
export const Content: React.FC<ContentPropsType> = (props:ContentPropsType) => {
    return (
        <S.Content>
           <Icon iconId={'arrowOne'}/>
            <S.Text>{props.text}</S.Text>
        </S.Content>
    );
};

