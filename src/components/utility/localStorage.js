import { toast } from "react-toastify";

const getLocalStorageDonation = () => {
    const storedDonation = localStorage.getItem('donation');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const savedDataDonation = (id) => {
    const storedItems = getLocalStorageDonation();
    const exists = storedItems.find(storedId => storedId === id);
    if (!exists) {
        storedItems.push(id);
        localStorage.setItem('donation', JSON.stringify(storedItems));
        toast.success('Your Donation is Successfully Done'); 
    }
}



export { getLocalStorageDonation, savedDataDonation }