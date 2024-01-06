import { useState } from "react"
import AddCategoty from "./AddCategoty"
import GalleryGift from "./GalleryGift"


const AppGift = () => {
    const [category, setCategory] = useState('')
  return (
    <>
    <AddCategoty setCategory={setCategory}/>
    <GalleryGift category={category}/>
    </>
  )
}

export default AppGift