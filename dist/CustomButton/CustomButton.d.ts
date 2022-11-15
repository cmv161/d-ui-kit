import { FC } from 'react';
import './CustomButton.css';
export interface CustomButton {
    color: string;
    children: string;
    big?: boolean;
}
declare const CustomButton: FC<CustomButton>;
export default CustomButton;
