import Place from "./Place";
function List({ places }) {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <Place place={place} />
        </li>
      ))}
    </ul>
  );
}

export default List;
