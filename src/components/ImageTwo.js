import { Parallax } from 'react-parallax';
import Man from '../images/abed-ismail-_jhUrn9o8yM-unsplash.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Man} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo