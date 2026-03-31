import LogoComp from "./LogoComp"
import NavComp from "./NavComp"
import LoginComp from "./LoginComp"

export default function HeaderComp() {
    return (
        <header className="bg-neutral-900 text-neutral-200 flex justify-between p-5 ">
            <LogoComp />
            <NavComp />
            <LoginComp />
        </header>
    )
}