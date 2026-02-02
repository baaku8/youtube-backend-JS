import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
// Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
    }) 


//abhi hmlog hmare server pe jo existing file links hae usko cloudinary pe upload krayenge,
//direct nhi kra skte the lekin ye 2 step wla process industries mae use hota hae, and so it's considered as a good practice

const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath){
            console.log("localFilePath is not valid.");
            return null;
        }
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log("File is uploaded successfully in cloudinary", response.url);
        return response;
    } catch (error) {
        //mtlb cloudinary mae upload krte smae error agya, to server pe bhi wo file link kyu hi rkhna,
        // better delete it
        fs.unlinkSync(localFilePath);
        console.log("file is removed from server due to failure in cloudinary upload");
        return null;
    }
}
export {uploadOnCloudinary}