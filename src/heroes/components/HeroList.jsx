import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {

  const heroes = useMemo( () => getHeroByPublisher( publisher ), [ publisher ] );

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 animate__animated animate__fadeIn">
      {heroes.map(hero => 
        <HeroCard 
          key={hero.id}
          {...hero}
        />
      )}
    </div>
  )
}
