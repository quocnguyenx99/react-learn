import { useContext } from "react";
import { getImageUrl } from "../utils/getImageUrl";
import { ImageSizeContext } from "../context/ImageSizeContext";

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <>
      <img
        style={{ marginRight: "16px", marginBottom: "16px" }}
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </>
  );
}

export default PlaceImage;
