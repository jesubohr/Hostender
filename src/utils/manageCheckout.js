import { useNavigate } from "react-router-dom";
import { useLocal } from "./hooks";

export default function createCheckout () {
    const navigate = useNavigate();
    const [userHistory, setUserHistory] = useLocal("usersHistory", []);

    return function BUY (data, setError, setLoading) {
        const { owner, cart, formData } = data;
        setUserHistory([...userHistory, {
            owner,
            info: { ...formData },
            history: [...cart]
        }]);
        wait(1000).then(() => {
            setLoading(false);
            navigate(`/`);
        });
    };
}

function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
