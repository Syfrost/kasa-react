import {NavLink} from "react-router-dom";
import './error404.scss'
export default function Error404() {
    return (
        <div className={'error404'}>
            <h1 className={'error404__error'}>404</h1>
            <p className={'error404__error__text'}>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className={'error404__home'} to='/'>Retourner sur la page d’accueil</NavLink>
        </div>
    )
}