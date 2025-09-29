import './App.css';
import { useState } from 'react'; 
import pic1 from './images/bam.jpg';
import pic2 from './images/2521.jpg';
import pic3 from './images/jkcute.jpg';


function ToMyApp() {
  const [bgColor, setBgColor] = useState("lightblue");
  const [image, setImage] = useState(pic1);
  const [zIndex, setZIndex] = useState(1);
  const [imgSize, setImagSize] = useState(150);

  const changeBackground = () => {
    const colors = ["lightblue", "purple", "orange", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomZ =Math.floor(Math.random()*2000);
    const randomSize = Math.floor(Math.random() * 100) + 100;
    const images = [pic1, pic2, pic3];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    setBgColor(randomColor);
    setImage(randomImage);
    setZIndex(randomZ);
    setImagSize(randomSize);

    alert('The next background color is ' + randomColor);
    alert('The next image is also changed');
  };

  return (
    <div className='container' style={{ backgroundColor: bgColor }}>
      <h1 className="title">Hello Elsa, welcome to my app!</h1>
      <p className="subtitle">You did it </p>
 <img 
        src={image} 
        alt="random" 
        className="animated-img"
        style={{ width: imgSize, height: imgSize, zIndex: zIndex }}
      />
 <button className='btn' onClick={changeBackground}>Click me</button>
    </div>
  );
}

export default ToMyApp;
