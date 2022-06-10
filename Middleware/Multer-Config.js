const Multer= require('multer');

const MIME_TYPES={
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}

const storage=Multer.diskStorage({
    destination: (req,file,callbacks) => {
        callbacks(null,'Images')},
    filename:(req,file,callbacks) =>{
        const name=file.originalname.split(' ').join('_');
        const extension=MIME_TYPES[file.mimetype];
        callbacks(null,name+Date.now()+"."+extension);
    }

});

module.exports = Multer({ storage }).single('image');