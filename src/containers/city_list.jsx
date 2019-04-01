import City from './city';


const CityList = (props) => {
  const renderList = () => {
    return this.props.cities.map((city, index) => {
      return (
        {city.name}
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};
export default CityList;

