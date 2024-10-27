import axios from "axios";

const CountPage= async () => {
    const countLocations = await  axios.get("localhost:4000/locations")
    return "Hay " +countLocations?.data?.length + " locaciones";
}

export default CountPage;


//@ es un rout slot, que es un componente que se renderiza en una ruta especifica, en este caso se renderiza en la ruta /dashboard/%40count/page.tsx