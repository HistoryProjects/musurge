import {trandId, newId, mixId, epochsId} from "../../data";
import {reqPlayList} from "../../data";

import PlayListCard from "../../components/content/playlist/PlayListCard";

const Home = ({token}) => {
  
    return (
      <div>
        
          <PlayListCard 
            titleSection="New song" token={token} 
            request={reqPlayList} playListsId={newId} 
          />

          <PlayListCard 
            titleSection="Trending Playlists" token={token} 
            request={reqPlayList} playListsId={trandId} 
          />

          <PlayListCard 
            titleSection="Mix for you" token={token} 
            request={reqPlayList} playListsId={mixId} 
          />

          <PlayListCard 
            titleSection="Epochs" token={token} 
            request={reqPlayList} playListsId={epochsId} 
          />

      </div>
    );
  };
  
  export default Home;

 