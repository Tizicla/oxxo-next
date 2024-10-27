import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";

const CountPage= async () => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;
    const countLocations = await  axios.get("http://127.0.0.1:4000/locations", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const cantidad = countLocations?.data?.length;
    return `Hay ${cantidad} locacion${cantidad > 1 ? "es" : ""}`;
}

export default CountPage;


//@ es un rout slot, que es un componente que se renderiza en una ruta especifica, en este caso se renderiza en la ruta /dashboard/%40count/page.tsx