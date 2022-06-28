import { useNavigate } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const heroImgUrl = `/assets/heroes/${id}.jpg`;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 animate__animated animate__fadeIn">
      <img src={heroImgUrl} alt={ superhero } className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' />
      <div class="flex flex-col justify-start p-4 leading-normal h-auto">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{superhero}</h5>
        <p class="mb-3 font-normal text-gray-700">{alter_ego}</p>
        <p class="mb-3 font-normal text-gray-700">{first_appearance}</p>
        <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 focus:outline-none"
          onClick={() => navigate(`/hero/${id}`)}
        >
          Conoce mas
        </button>
      </div>
    </div>
  )
}
