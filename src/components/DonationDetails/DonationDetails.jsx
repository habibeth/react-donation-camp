import { useLoaderData } from "react-router-dom";
import { getLocalStorageDonation } from "../utility/localStorage";
import { useEffect, useState } from "react";
import DonationDetail from "../DonationDetail/DonationDetail";


const DonationDetails = () => {
    const donationItems = useLoaderData();
    const [dataLength, setDataLength] = useState(4);
    const [donationItem, setDonationItem] = useState([]);

    useEffect(() => {
        const storedDonationIds = getLocalStorageDonation();
        const savedDonationItem = [];
        for (const Ids of storedDonationIds) {
            const donation = donationItems.find(item => item.id === Ids);
            savedDonationItem.push(donation);
            setDonationItem(savedDonationItem);
        }
    }, [donationItems])
    return (
        <div className="max-w-7xl mx-auto mb-20 mt-20">
            <div className="grid grid-cols-2 gap-5">
                {
                    donationItem.slice(0, dataLength).map(savedItem => <DonationDetail
                        key={savedItem.id}
                        savedItem={savedItem}
                    ></DonationDetail>)
                }
            </div>
            <div className={donationItem.length < 4 && 'hidden'}>
                <div className={dataLength === donationItems.length ? 'hidden' : 'flex justify-center'}>
                    <button className="btn mt-10 w-32 bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                        onClick={() => setDataLength(donationItems.length)}
                    >See All</button>
                </div>
            </div>

        </div>
    );
};

export default DonationDetails;