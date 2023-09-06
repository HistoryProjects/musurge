import {genres} from "../../data";
import GenreCard from "../../components/content/GenreCard";


const Explore = () => {

    return (
        <div>
            <div className="bg-componentBg p-5 m-4 rounded-xl">
               

                <div className="flex justify-between">
                    {
                        genres.slice(0, 5).map(gnr => {
                            return(
                                <GenreCard 
                                    id={gnr.id}
                                    gnrImg={gnr.img}
                                    gnrTitle={gnr.title}
                                />
                            )
                        })
                    }
                </div>

                <div className="flex justify-between mt-10">
                    {
                        genres.slice(5, genres.length).map(gnr => {
                            return(
                                    <GenreCard 
                                        id={gnr.id}
                                        gnrImg={gnr.img}
                                        gnrTitle={gnr.title}
                                    />
                            )
                        })
                    }   
                </div>
            </div>
        </div>
        
    );
  };
  
  export default Explore;
