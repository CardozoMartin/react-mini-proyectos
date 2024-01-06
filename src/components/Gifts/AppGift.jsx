import { useState } from "react"
import AddCategoty from "./AddCategoty"
import GalleryGift from "./GalleryGift"


const AppGift = () => {
    const [category, setCategory] = useState('')
  return (
    <>
    <div>AppGift</div>
    <AddCategoty setCategory={setCategory}/>
    <GalleryGift category={category}/>
    </>
  )
}

export default AppGift