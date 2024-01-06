import { useApi } from "../../Api/api";
import AppGift from "./AppGift";
import ImageItem from "./ImageItem";


const GalleryGift = ({ category }) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0Pv3HPyhHX3GuSC2rqVSMbrJKdiVr0Y7&q=${category}&limit=10`;

    const { loading, data } = useApi(url);
  return (
   <div className='container-gifs container'>
      <div className="row">
       
    { 
        loading ?
            data.map(img => (
              <div key={img.id} className="col-xl-3 mb-4 col-md-6 mx-auto text-center mt-5 text-light">

                <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
              </div>
            ))
        : 'Cargando...'
    }

       
      </div>
</div>
  )
}

export default GalleryGift