import {Link} from "react-router-dom"

const PL_CardItem = ({pl_items}) => {
    return (
        <div className="flex justify-between gap-8">
        {
        
            pl_items.map(playlist => (
            <div key={playlist.id} className="playlist">
             
                <Link key={playlist.id} to={`/playlist/${playlist.id}`} >
                    <img src={playlist.images[0].url} alt={playlist.name} className="rounded-[20px] w-[200px] h-[200px]" />
                </Link>
                
                <h4 className="text-white text-lg font-medium mt-5">{`${playlist.name.slice(0,16)}` }</h4>
                
            </div>
            ))
        }

    </div>
    )
}
export default PL_CardItem;