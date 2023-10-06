"use Client"
import Image from 'next/image';
import girl from './girl1.jpg';
import men from './men1.jpg';
import onion from './onion1.jpg';

const ImageSlider = () => {
    const images = [girl, men, onion];
    
    return (
    <div className="relative w-full h-400px overflow-hidden">
    {images.map((image, index) => (
        
      <div key={index} className=" w-full h-full flex justify-center items-center">
        <div
          className="w-full h-full bg-cover filter blur-10 absolute z-[-1]"
          style={{ backgroundImage: `url(${image})` }}
        >
            
        </div>
        <Image src={image} alt={`Slide ${index}`} className="w-80% h-auto z-10" />
      </div>
    ))}
  </div>
  );
};

export default ImageSlider;