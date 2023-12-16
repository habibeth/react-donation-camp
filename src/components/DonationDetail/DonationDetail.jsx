import { Link } from "react-router-dom";


const DonationDetail = ({ savedItem }) => {
    const { id, title, category, category_bg, card_bg, color, img, price } = savedItem;
    return (
        <div className="flex shadow-xl rounded-r-lg" style={{ background: `${card_bg}` }}>
            <figure><img src={img} alt="Movie" className="h-full w-60 rounded-l-lg" /></figure>
            <div className="">
                <div className="mt-4">
                    <span className="px-2 py-[3px] rounded-sm  ml-4 text-sm font-medium" style={{ background: `${category_bg}`, color: `${color}` }}>{category}</span>
                    <p className="ml-4 mt-1 font-semibold">{title}</p>
                    <p className="ml-4 mt-1 font-bold" style={{ color: `${color}` }}>{price}</p>
                </div>
                <Link to={`/item/${id}`}>
                    <div className="">
                        <button className="mt-2 ml-4 border-0 rounded-md px-3 py-1 text-white font-semibold" style={{ background: `${color}` }}>View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DonationDetail;