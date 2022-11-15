import React, {FC} from 'react';
import './CustomButton.css'

export interface CustomButton {
    color : string;
    children: string;
    big?: boolean;
}


const CustomButton : FC<CustomButton>= ({children, color, big,...props}) => {
    const rootClasses=['my-button']
    if(big){
        rootClasses.push('big')
    }
    return (
        <button {...props} className={rootClasses.join(' ')} style={{color}}>
            {children}
        </button>
    );
};

export default CustomButton;