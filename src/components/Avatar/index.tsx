import './style.scss';
import IAvatar from "../../interfaces/IAvatar";

export default function Avatar({ picture, altText }: IAvatar) {
    return( <img className="avatar" src={picture} alt={altText} /> )
};