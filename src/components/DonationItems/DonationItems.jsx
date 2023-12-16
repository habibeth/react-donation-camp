import { useEffect, useState } from "react";
import DonationItem from "../DonationItem/DonationItem";


const DonationItems = () => {
    const [donationItems, setDonationItems] = useState([]);
    
    useEffect(()=>{
        fetch('donation.json')
        .then(res=> res.json())
        .then(data=> setDonationItems(data))
    },[])
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto mb-56">
            {
                donationItems.map(donationItem => <DonationItem key={donationItem.id} donationItem={donationItem}></DonationItem>)
            }
        </div>
    );
};

export default DonationItems;