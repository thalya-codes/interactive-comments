import './style.scss';
import IAvatar from "../../interfaces/IAvatar";

export default function Avatar(props: IAvatar) {
    return( <img className="me-3 avatar" src={props.picture} alt={props.altText} /> )
};