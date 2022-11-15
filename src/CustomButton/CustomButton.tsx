import React, {FC} from 'react';
import './CustomButton.css'
import { Button } from 'antd';

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
        // <button {...props} className={rootClasses.join(' ')} style={{color}}>
        //     {children}
        // </button>
    //
    <Button {...props} className={rootClasses.join(' ')} style={{color}}>
        {children}
    </Button>
    );
};

export default CustomButton;