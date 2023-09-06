import PL_CardItem from "../playlist/PL_CardItem";
import axios from "axios";
import React, {useState, useEffect} from "react";


const PlayListCard = ({token, request, playListsId, titleSection}) => {
   const [playLists, setPlayLists] = useState([]);

   useEffect(() => {
      const getPlayLists = async () =>{

         try{
             const playListRequests = playListsId.map(id => 
                 axios.get(`${request}${id}`,{
                   headers: { Authorization: `Bearer ${token}` }
                 })
              );
       
              const playListResponses = await Promise.all(playListRequests);
              const playListData = playListResponses.map(response => response.data);
   
              setPlayLists(playListData)
              //console.log(playListData);
   
         }catch(error){
             console.log('error');
         }
       }
       getPlayLists()
   },[token, request, playListsId])

   return (
      <div className="rounded-xl text-center">
         <div className="bg-componentBg p-5 m-4 rounded-xl">
            <div className="w-full p-5 text-white text-2xl font-medium text-left">
               <h1>{titleSection}</h1>
            </div>
               
               <PL_CardItem pl_items={playLists.slice(0, 5)} /> <br/><br/>
               <PL_CardItem pl_items={playLists.slice(5, 10)} />
         </div>
      </div>
   )
}
export default PlayListCard;