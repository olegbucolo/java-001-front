import { NavLink } from 'react-router-dom'
import { navData } from './nav.data'

export default function NavComp() {
    return (
        <>
            {
                navData.map(e => (
                    e.type === 'link'
                        ? <NavLink
                            key={e.id}
                            to={e.href}>{e.label}
                        </NavLink>
                        : <a href="">NONO</a>
                ))
            }
        </>
    )
}