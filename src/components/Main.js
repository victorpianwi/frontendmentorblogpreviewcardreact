import Img from "./Img"
import Button from "./Button"
import P from "./P"
import Htwo from "./Htwo"
import Section from "./Section"

const Main = () => {
  return (
    <main className="main">
        <Img src={"assets/images/illustration-article.svg"} alt={"Blog Preview"} c={"blogimage"} />
        <Button title={"Learning"} />
        <P c={"publish"} text={"Published 21 Dec 2023"} />
        <Htwo />
        <P c={"desc"} text={"These languages are the backbone of every website, defining structure, content, and presentation."} />
        <Section />
    </main>
  )
}

export default Main