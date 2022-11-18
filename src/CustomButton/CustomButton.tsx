import React, {FC} from 'react';
import './CustomButton.css'
import  Button  from 'antd/lib/button';

export interface CustomButton {
    color : string;
    children: string;

}


const CustomButton : FC<CustomButton>= ({children, color, ...props}) => {
    const rootClasses=['my-button']

    return (

            <Button {...props} className={rootClasses.join(' ')} style={{color}}>
                {children}
            </Button>

    );
};

export default CustomButton;