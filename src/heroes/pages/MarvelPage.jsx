import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1>MarvelPage</h1>
      <hr  className="border-gray-400"/>

      <HeroList publisher='Marvel Comics' />
    </>
  )
}
