import { getHeroByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {

  const heroes = getHeroByPublisher(publisher);

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {heroes.map(hero => 
        <HeroCard 
          key={hero.id}
          {...hero}
        />
      )}
    </div>
  )
}
