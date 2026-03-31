import { NavLink } from "react-router-dom"
import { PiPictureInPicture } from "react-icons/pi"

export default function LogoComp() {
    return (
        <>
            <NavLink to="/">
                <PiPictureInPicture className="size-5 scale-200" />
            </NavLink>
        </>
    )
}