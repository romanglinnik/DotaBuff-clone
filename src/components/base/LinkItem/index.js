import { NavLink } from 'react-router-dom'

const LinkItem = ({children, url}) => {
    return (
          <NavLink to={url} className={({isActive}) => isActive && 'active_link' }>
            {children}
          </NavLink>
      )
}

export default LinkItem;