import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { savedDataDonation } from "../utility/localStorage";
import 'react-toastify/dist/ReactToastify.css';


const ItemDetails = () => {
    const items = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)


    const item = items?.find(item => item.id === idInt);
    const { title, color, img, price, description } = item;

    const handleDonateData = () => {
        savedDataDonation(idInt);         
    }
    
    return (
        <div>
            <div className="mt-20 p-0">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mb-14">
                        <img src={img} alt="" className="w-full h-[700px]" />
                        <div className="w-full absolute bottom-0 bg-black bg-opacity-50 py-8">
                            <button onClick={handleDonateData} className="btn btn-primary ml-9 border-0 rounded-sm" style={{ background: `${color}` }}>Donate ${price}</button>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{title}</h2>
                    <p className="text-justify mb-20">{description}</p>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;