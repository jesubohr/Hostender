import { useNavigate } from "react-router-dom";
import { useLocal } from "./hooks";

export default function createCheckout () {
    const navigate = useNavigate();
    const [userHistory, setUserHistory] = useLocal("usersHistory", []);

    return function BUY (data, setError, setLoading) {
        const { owner, cart, formData } = data;
        const exists = userHistory.find(item => item.owner === owner);
        let newUserHistory;
        if (exists) {
            newUserHistory = userHistory.map(item => {
                if (item.owner === owner) {
                    item.history.push({
                        info: { ...formData },
                        products: cart
                    });
                }
                return item;
            });
        } else {
            newUserHistory = [...userHistory, {
                owner,
                info: {...formData},
                history: [...cart]
            }];
        }
        setUserHistory(newUserHistory);
        wait(1000).then(() => {
            setLoading(false);
            navigate(`/`);
        });
    };
}

function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
