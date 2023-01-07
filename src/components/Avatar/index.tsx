import './style.scss';
import IProps from "../../interfaces/IAvatar";

export default function Avatar({ picture, altText }: IProps) {
    return( <img className="avatar" src={picture} alt={altText} /> )
};