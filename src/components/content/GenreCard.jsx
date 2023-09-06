import {Link} from "react-router-dom"

const GenreCard = ({id, gnrImg, gnrTitle}) => {
    
    return(
        <Link key={id} to={`/genre/${id}`} className="w-2/12 h-[180px] cursor-pointer">
           
                <div className="w-full h-[180x] relative z-10 text-white hover:text-[#28D4D0]">
                    <h1 className="text-2xl font-bold absolute z-30 right-5 bottom-8">
                        {gnrTitle}
                    </h1>
                    <img src={gnrImg} alt="" className="w-full h-[180px] rounded-xl"/>
                </div>
            
        </Link>

        
    )

}
export default GenreCard;
