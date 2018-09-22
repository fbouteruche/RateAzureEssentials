let mongodburi = process.env["MONGODB_URI"]
if(mongodburi)
{
    mongodburi = mongodburi;
}
else{
    mongodburi = 'mongodb://localhost:27017/sessionvote'
}
export const MONGODB_URI = mongodburi;

