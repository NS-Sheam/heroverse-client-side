import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
const Gallery = () => {
    const [toyData, setToyData] = useState([]);
    const photoSrc = toyData.map(photo => photo.image);
    const photos = photoSrc.map((src, index) => ({
        src: src,
        width: index % 2 === 0 ? 1600 : 1000,
        height: index % 2 === 1 ? 1400 : 900,
      }));
    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToyData(data);
            })
    }, [])

    return (
        <div className="container mx-auto px-10 my-5">
            <h1 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center text-orange-primary">Explore Our Gallery</h1>
            <PhotoAlbum layout="rows" photos={photos} />;
        </div>
    );
};

export default Gallery;