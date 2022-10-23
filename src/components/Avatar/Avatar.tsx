import './style.scss';
import IAvatar from "../../interfaces/IAvatar";

export default function Avatar(props: IAvatar) {
    return( <img className="avatar" src={props.picture} alt={props.altText} /> )
};