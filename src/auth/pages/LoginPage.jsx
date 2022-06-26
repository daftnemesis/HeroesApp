import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/", { replace: true })
  }

  return (
    <div className="max-w-sm mx-auto text-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-xl max-w-sm p-4 mt-24">
        <div>
          <h1>Login</h1>
          <hr className="border-gray-500"/>
        </div>

        <div>
          <p className="font-semibold">Bienvenido a HeroesApp por favor ingresa para continuar</p>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
