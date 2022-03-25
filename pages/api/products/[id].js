import {data} from '../../../data';
export default function handleProduct(req,res){
    let id = req.query.id;
    let filtered = data.filter(pro => pro.id == id);
    if(filtered.length > 0){
        res.status(200).json(filtered[0]);
    }else {
        res.status(400).json({message:"there is error"});
    }
}