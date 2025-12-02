export default async function handler(req,res){
  try{
    res.status(200).json({status:"ok", message:"Backend funcionando!"});
  }catch(e){
    res.status(500).json({error:e.toString()});
  }
}
