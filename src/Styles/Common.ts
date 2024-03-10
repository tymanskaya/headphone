
type FontPropsType = {
    family?: string
    weight?: number
    Fmin?: number
    Fmax?: number



}
export const font =({family, weight, Fmin, Fmax}: FontPropsType)=> `
font-family: ${family || 'Rubik'};
font-weight: ${weight ||400};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`