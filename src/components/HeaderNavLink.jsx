import link from 'daisyui/components/link'
import { NavLink } from 'react-router'

const HeaderNavLink = ({ to, linkLabel }) => {
    return (

        <NavLink
			className={({ isActive }) =>
				isActive    ?"hover:text-white transition ease-in-out duration-200 text-sm/6 text-red-500 font-bold"
					        :"hover:text-red-500 transition ease-in-out duration-200 text-sm/6 text-white font-bold"
			}
			to={to}
		>
			{linkLabel}
		</NavLink>
    )
}

export default HeaderNavLink
