import { NavLink, Link, useNavigate } from "react-router-dom"

export const Navbar = () => {

  const navigate = useNavigate();

  return (

    <nav className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 border-gray-400 text-m font-medium p-2 shadow-lg">
      <div className=" flex justify-between">
        <div className="w-fit flex gap-2">
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
              to='search' 
              className={ ({ isActive }) => `hover:text-white transition ease-in-out delay-100 ${isActive ? 'text-white': 'text-violet-500' }` }
            >
                Search
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
              className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded-lg"
              onClick={() => navigate('/login')}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
