import Img from "./Img"
import Hfour from "./Hfour"

const Section = () => {
  return (
    <section className="profile">
        <Img src={"assets/images/image-avatar.webp"} alt={"Avatar"} c={"profileimage"} />
        <Hfour />
    </section>
  )
}

export default Section