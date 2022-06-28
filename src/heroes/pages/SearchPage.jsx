import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation()

  const { q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0 && heroes.length === 0)


  const { searchText, onInputChange } = useForm({
    searchText: "",
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if( searchText.trim().length <= 1 ) return

    navigate(`?q=${searchText}`)
  }
  
  return (
    
    <>
      <h1 className="font-bold text-3xl">Search Page</h1>
      <hr className="border-1 border-gray-500 mb-2"/>

      <div className="flex flex-col md:grid md:grid-cols-6 ">
        <div className="md:col-start-1 md:col-end-3 border">
           <h4 className="font-semibold text-xl pl-1">Searching</h4>
           <hr />

           <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-violet-500 focus:border-violet-500 block w-full p-2.5"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button 
              className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1 text-center mr-2 my-2"

            >
              Search
            </button>
           </form>
        </div>

        <div className=" md:col-start-4 md:col-end-6">
          <h4 className="font-semibold text-xl pl-1">Results</h4>
          <hr className="border border-gray-300"/>

          <div 
            className="bg-emerald-300 text-center h-12 grid items-center text-lime-900 rounded-xl my-2 animate__animated animate__fadeInUp"
            style={{ display: showSearch ? '' : 'none' }}
          >
            <p>Search a hero</p>
          </div>

          <div 
            className="bg-red-300 text-center h-12 grid items-center text-red-900 rounded-xl my-2 animate__animated animate__fadeInUp"
            style={{ display: showError ? '' : 'none' }}
          >
            <p>No hero with <b>{q}</b></p>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }


        </div>
      </div>
    </>

  )
}
