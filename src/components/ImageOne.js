import { Parallax } from 'react-parallax';
import Man from '../images/brian-mcgowan-I0fDR8xtApA-unsplash.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Man} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne