export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h1>Drink choice: {drink.name}</h1>
      <img src={drink.imgUrl} alt={drink.alt} width="100px" height="100px" />
      <p>Your drink will be ready soon!</p>
    </>
  );
};
