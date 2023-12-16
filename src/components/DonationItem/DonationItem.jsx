import { Link } from "react-router-dom";


const DonationItem = ({ donationItem }) => {
    const { id, title, category, category_bg, card_bg, color, img } = donationItem;
    return (
        <div className="">
            <Link to={`/item/${id}`}>
                <div className="card card-compact shadow-xl rounded-md" style={{ background: `${card_bg}` }}>
                    <figure><img src={img} alt="Shoes" className="h-48 w-full" /></figure>
                    <div className="mt-4">
                        <span className="px-2 py-[3px] rounded-sm  ml-4 text-sm font-medium" style={{background: `${category_bg}`, color: `${color}`}}>{category}</span>
                        <p className="mt-1 ml-4 mb-4 font-semibold" style={{ color: `${color}`}}>{title}</p>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default DonationItem;