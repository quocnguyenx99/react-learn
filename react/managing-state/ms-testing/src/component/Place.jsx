import PlaceImage from "./PlaceImage";
function Place({ place }) {
  return (
    <div style={{ display: "flex" }}>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </div>
  );
}

export default Place;
