import pic from '../images/img.png'
import {useState } from 'react';
import '../components/ImageApp.css'
 const ImageEditor = () => {
    const [width, setWidth]= useState(200);
    const [height, setHeight]= useState(200);
    const [rotation , setRotation] = useState(0);
  return (
    <div className='disp'>
        <div className='img'>
            <img src={pic} style={{ width: width , height: height , transform: `rotate(${rotation}deg)`}}/></div>
        <div className='panel'>
            <button className='button'
    onClick={() => {
        setWidth(width+10);
    }}
    >
        Increase Width
    </button>
    <button className='button'
    onClick={() => {
        setHeight(height+10);
    }}
    >
        Increase Height
    </button>
    <button className='button'
    onClick={() => {
        setWidth(width-10);
    }}
    >
        Decrease Width
    </button>
    <button className='button'
    onClick={() => {
        setHeight(height-10);
    }}
    >
        Decrease Height
    </button>
    <button className='button' onClick={()=>{
        setRotation(rotation+10);
    }}>Rotate-clockwise</button>
    <button className='button' onClick={()=>{setRotation(rotation-10)}}>Rotate-anticlockwise</button>
    </div>
        

    </div>
    
  )
}
export default ImageEditor;