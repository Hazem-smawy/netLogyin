import { data } from "../../../data";
export default function handleProducts(req,res){
    res.status(200).json(data);
}