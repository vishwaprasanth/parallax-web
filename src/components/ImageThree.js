import { Parallax } from 'react-parallax';
import Man from '../images/jan-haerer-7k7k3WZWggk-unsplash.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Man} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
);

export default ImageThree