import { useLoaderData } from "react-router-dom";
import { getLocalStorageDonation } from "../utility/localStorage";
import { useEffect, useState } from "react";
import DonationDetail from "../DonationDetail/DonationDetail";


const DonationDetails = () => {
    const donationItems = useLoaderData();
    const [donationItem, setDonationItem] = useState([]);

    useEffect(()=>{
        const storedDonationIds = getLocalStorageDonation();
        const savedDonationItem = [];
        for( const Ids of storedDonationIds){
            const donation = donationItems.find(item=> item.id === Ids);
            savedDonationItem.push(donation);
            setDonationItem(savedDonationItem);
        }
    },[donationItems])

    console.log(donationItem)
    
    console.log('donation page')
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 mb-20 mt-20">
            {
                donationItem.map(savedItem=> <DonationDetail key={savedItem.id} savedItem={savedItem}></DonationDetail>)
            }
        </div>
    );
};

export default DonationDetails;