import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const hero = useMemo( () => getHeroById( id ), [ id ] )

  const onNavigateBack = () => {
    navigate( -1 );
  }

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className=" flex flex-col md:grid md:grid-cols-3 md:grid-rows-none gap-2">
      <div>
        <img 
          src={`/assets/heroes/${ id }.jpg`}
          alt={ hero.superhero }
          className='rounded-xl animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-start-2 col-end-4 animate__animated animate__fadeInRight">
        <h3 className="font-bold text-3xl">{ hero.superhero }</h3>
        <ul className="mt-2">
          <li className="font-medium text-base"> <b>Alter ego:</b> { hero.alter_ego} </li>
          <li className="font-medium text-base"> <b>Publisher:</b> { hero.publisher} </li>
          <li className="font-medium text-base"> <b>Primera aparicion:</b> {hero.first_appearance} </li>
        </ul>
        
        <h5 className="font-bold text-xl mt-5">Characters</h5>
        <p className="font-medium text-lg">{ hero.characters }</p>

        <button
          onClick={onNavigateBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 animate__animated animate__fadeInUp"
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
