import { Parallax } from 'react-parallax';
import Man from '../images/the-cleveland-museum-of-art-urR3RomtKyg-unsplash.jpg'

const ImageFour = () => (
    <Parallax className='image' bgImage={Man} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
);

export default ImageFour