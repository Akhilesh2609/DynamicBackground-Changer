import {useState} from 'react'
import './App.css';
function App() {

const [divImage, setDivImage] = useState('url(default-image.jpg)');
const [newImageURL, setNewImageURL] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
 setDivImage(`url(${newImageURL})`);
setNewImageURL('');
 };

const handleInputChange = (e) => {

setNewImageURL(e.target.value);
 };
 return (

<div >
<h1 style={{textAlign:'center',marginTop:'0'}}>View Image</h1>
<form onSubmit={handleSubmit} style={{textAlign:'center'}}>
<label htmlFor="new-image-url" style={{color:'black'}}><strong>Image URL:</strong></label>
<input style={{margin:"3px"}}
type="text"
id="new-image-url"
value={newImageURL}
onChange={handleInputChange}
 />
<button type="submit" style={{borderRadius:'5px'}}>Change Image</button>
</form>
<div className='back' style={{ backgroundImage: divImage, height:'60vh',backgroundRepeat:'no-repeat',marginTop:'22px'}}></div>

</div>
);

}




export default App;