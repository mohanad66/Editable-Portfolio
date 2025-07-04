
export const CardsApi = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/")
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const SkillsApi = async () =>{
     try {
        const response = await fetch("http://127.0.0.1:8000/skills/")
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}
export const ContactApi = async () =>{
     try {
        const response = await fetch("http://127.0.0.1:8000/contacts/")
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}
export const CarouselApi = async () =>{
     try {
        const response = await fetch("http://127.0.0.1:8000/carousel/")
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}