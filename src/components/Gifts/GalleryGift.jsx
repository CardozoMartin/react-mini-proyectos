import { useApi } from "../../Api/api";
import AppGift from "./AppGift";
import ImageItem from "./ImageItem";


const GalleryGift = ({ category }) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0Pv3HPyhHX3GuSC2rqVSMbrJKdiVr0Y7&q=${category}&limit=10`;

    const { loading, data } = useApi(url);
  return (
    <div className='container-gifs'>
    {
        loading ?
            data.map(img => (
                <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
            ))
        : ''
    }
</div>
  )
}

export default GalleryGift