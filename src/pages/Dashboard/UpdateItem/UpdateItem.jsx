import { useLoaderData, useParams } from "react-router-dom"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import axios from "axios";

const UpdateItem = () => {
    const item = useLoaderData();
    const {id} =useParams()
   axios.get(`http://localhost:5000/menu/642c155b2c4774f05c36eeaa`).then(res => console.log(res.data))

   
    // console.log('juuju',item)
  return (
    <div>
        <SectionTitle heading={'Update Item'} subHeading={'Refresh Info'}/>
    </div>
  )
}

export default UpdateItem