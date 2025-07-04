import { useEffect, useState } from "react"
import { CardsApi, ContactApi, SkillsApi } from "./services/api"
import Card from "./parts/Card/index.jsx"
import Carousel from "./parts/Carousel/index.jsx"
import { CarouselApi } from './services/api'

import "./css/styles.css"
import Skill from "./parts/Skill/index.jsx"
import { ContactWay } from "./parts/Conatact/index.jsx"
function App() {
  const [images, setImages] = useState([])
  const [cards, setCards] = useState([])
  const [skills, setSkills] = useState([])
  const [contacts, setContacts] = useState([])
  const fetchCards = async () => {
    try {
      const CardsData = await CardsApi()
      setCards(CardsData)
    } catch (err) {
      console.log(err)
    }
  }
  const fetchImages = async () => {
    try {
      const data = await CarouselApi()
      setImages(data)
    } catch (e) {
      console.log(e)
    }
  }
  const fetchSkills = async () => {
    try {
      const data = await SkillsApi()
      setSkills(data)
    } catch (e) {
      console.log(e)
    }
  }
  const fetchContacts = async () => {
    try {
      const data = await ContactApi()
      setContacts(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchCards()
    fetchImages()
    fetchSkills()
    fetchContacts()
  }, [])
  return (
    <div className="portfolio">
      <div className="hero">
        <div className="text">
          <h2>Welcome</h2>
          <h3>I am Frontend Developer</h3>
        </div>
        <Carousel images={images} />
      </div>
      <div className='cards-container container'>
        <h2 className="title">Websites</h2>
        {cards.length !== 0 ? cards.map(card => (
          <Card card={card} key={card.id} />
        ))
          :
          (<div><h1>There is No Cards</h1></div>)}
      </div>
      <div className="skills-container container">
        <h2 className="title">Skills</h2>
        {
          skills.map((skill) => (<Skill skill={skill} />))
        }
      </div>
      <div className="footer">
        <div className="copyrights">
          <h5>Deserunt et voluptate consequat nulla nisi et non irure ex enim elit duis amet occaecat.</h5>
          <p>Laborum occaecat pariatur id ullamco duis minim laboris ullamco adipisicing occaecat culpa adipisicing labore culpa. Amet laborum duis eiusmod dolore amet ad occaecat cupidatat in ad laboris sit commodo. Adipisicing enim in commodo sit duis voluptate proident mollit occaecat.
          </p>
        </div>
        <div className="contact-container">
          {contacts.map((contact) => (<ContactWay contact={contact} />))}
        </div>
      </div>
    </div>
  )
}

export default App


