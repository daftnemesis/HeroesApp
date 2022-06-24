import { NavLink, Link } from "react-router-dom"

export const Navbar = () => {
  return (

    <nav className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 border-gray-400 text-m font-medium p-2 shadow-lg">
      <div className=" flex justify-between">
        <div className="w-fit">
          <Link
            to='/'
            className="text-white"
          >
            Asociaciones
          </Link>
        </div>

        <div className="flex w-fit gap-3">
          <div>
            <NavLink 
              to='marvel' 
              className={ ({ isActive }) => `hover:text-white transition ease-in-out delay-100 ${isActive ? 'text-white': 'text-violet-500' }` }
            >
                Marvel
            </NavLink>
          </div>

          <div>
            <NavLink 
              to='dc' 
              className={ ({ isActive }) => `hover:text-white transition ease-in-out delay-100 ${isActive ? 'text-white': 'text-violet-500' }` }
            >
                DC
            </NavLink>
          </div>
        </div>

        <div className="w-fit">
          <div>
            <button 
              className="text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
