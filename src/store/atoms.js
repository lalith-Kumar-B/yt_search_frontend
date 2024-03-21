import {atom, selector} from 'recoil';
import axios from 'axios'
const qyAtom = atom({
    key : "qyAtom",
    default : "Pubg Rush"
})

const LvideosAtom = atom({
    key : "LvideosAtom",
    default : 15
})

const video_ids_arr = selector({
        key : "video_ids_arr_sel",
        get : async ({get})=>{
            const res = await axios.get(`http://localhost:3000/search?qy=${get(qyAtom)}&Lvideos=${get(LvideosAtom)}`);
            console.log(res.data.videoIds);
            return res.data.videoIds;
        }
    })

// const video_ids_arr = atom({
//     key : "video_ids_arr",
//     // default : ["x","y","z","q"] 
//     default : selector({
//         key : "video_ids_arr_sel",
//         get : async ()=>{
//             const res = await axios.get("http://localhost:3000/search");
//             console.log(res.data.videoIds);
//             return res.data.videoIds;
//         }
//     })
// })

export {video_ids_arr,qyAtom,LvideosAtom}