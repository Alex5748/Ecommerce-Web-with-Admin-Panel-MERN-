const cloudinary = require('cloudinary').v2;
const multer = require('multer');


cloudinary.config({
    cloud_name: 'dvtig5j8z',
    api_keys: "685276654923738",
    api_secret:"Myl8WPeWB8VDe58LH2v82xGk7Oc"
})

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    })
    return result;
}

const upload = multer({ storage })


module.exports = {upload, imageUploadUtil}