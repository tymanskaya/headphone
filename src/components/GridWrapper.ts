import styled from "styled-components";

type GridWrapperPropsType = {
    columns?: string
    rows?: string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: ${props => props.columns || '1fr 1fr'};
    grid-template-rows: ${props => props.rows || "1fr 1fr"};
    
    
    `