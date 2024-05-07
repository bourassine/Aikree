import { useState, useEffect } from 'react';
import './slider.scss';

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 37) { // Touche gauche
                changeSlide("left");
            } else if (event.keyCode === 39) { // Touche droite
                changeSlide("right");
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [imageIndex]); // Écouter les changements de l'index de l'image

    const changeSlide = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };

    return (  
        <div className="slider">
            {imageIndex !== null && (
                <div className='fullSlider'>
                    <div className='arrow'>
                        <img src='/arrow.png' alt='' onClick={() => changeSlide("left")} />
                    </div>
                    <div className='imgContainer'>
                        <img src={images[imageIndex]} alt='' />
                    </div>
                    <div className='arrow'>
                        <img src='/arrow.png' className='right' alt='' onClick={() => changeSlide("right")} />
                    </div>
                    <div className='close' onClick={() => setImageIndex(null)}>X</div>
                </div>
            )}
            <div className='bigImage'>
                <img src={images[0]} alt='' onClick={() => setImageIndex(0)} />
            </div>
            <div className='smallImages'>
                {images.slice(1).map((image, index) => (
                    <img src={image} alt='' key={index} onClick={() => setImageIndex(index + 1)} />
                ))}
            </div>
        </div>
    );
}

export default Slider;
