import React,{useState}from 'react'
import {useSetRecoilState} from 'recoil'
import {qyAtom, LvideosAtom} from './store/atoms.js'
function SearchInput() {
    //global components
    const setQy = useSetRecoilState(qyAtom);
    const setLvideos = useSetRecoilState(LvideosAtom);
    //local components
    const [Localqy,setLQy] = useState("");
    const [LocalLvideos,setLLvideos] = useState("");
    
    const handleChange = (e)=>{
        if(e.target.name == "qy"){
            setLQy(e.target.value);
        }
        if(e.target.name == "Lvideos"){
            setLLvideos(e.target.value);
        }
    }

    const handleSearch = ()=>{
        setQy(Localqy);
        setLvideos(LocalLvideos-1);
    }

  return (
    <div>
      <input name="qy" type="text" value={Localqy} onChange={(e)=>{handleChange(e)}}/>
      <input name="Lvideos" type="number" value={LocalLvideos} onChange={(e)=>{handleChange(e)}}/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchInput
