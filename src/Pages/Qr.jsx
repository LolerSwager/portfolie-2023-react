import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSwatchbook } from "react-icons/fa";

export default function Qr() {
    const navigate = useNavigate();
    const params = useParams();
    const themeColor = `#${params.themeColor}`;

    const customId = "custom-id-yes";

    localStorage.setItem("color", themeColor);
    toast(`Custom Theme Applyed`, {
        theme: "dark",
        closeOnClick: false,
        toastId: customId,
        icon: <FaSwatchbook />,
    });

    return navigate("/");
}
