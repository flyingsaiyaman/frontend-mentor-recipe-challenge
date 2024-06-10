import omlette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img className="image" src={omlette} alt="omlette-img" />
        <div>
          <p className="title outfit">Simple Omelette Recipe</p>
          <p className="text-font">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your chouce of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="list-box">
          <p className="mini-title outfit">Preparation time</p>
          <ul className="list outfit">
            <li>
              <b>Total:</b> Approximately 10 minutes
            </li>
            <li>
              <b>Preparation:</b> 5 minutes
            </li>
            <li>
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </div>
        <div className="ingredients">
          <p className="sub-title">Ingredients</p>
          <ul className="list outfit">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div>
          <hr />
        </div>
        <div className="instructions">
          <p className="sub-title">Instructions</p>
          <ol className="list outfit">
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs witha pinch of salt
              and pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs witha pinch of salt
              and pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs witha pinch of salt
              and pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs witha pinch of salt
              and pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
            <li>
              <b>Beat the eggs:</b> In a bowl, beat the eggs witha pinch of salt
              and pepper until they are well mixed. You can add a tablespoon of
              water or milk for a fluffier texture.
            </li>
          </ol>
        </div>
        <div>
          <hr />
        </div>
        <div className="nutrition">
          <p className="sub-title">Nutrition</p>
          <div className="left">
            <p style={{ paddingLeft: "20px" }}>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <div className="table outfit">
              <div className="items">
                <p>Calories</p>
                <p className="mini-title">277kcal</p>
              </div>
              <hr />
              <div className="items">
                <p>Carbs</p>
                <p className="mini-title">0g</p>
              </div>
              <hr />
              <div className="items">
                <p>Proteins</p>
                <p className="mini-title">20g</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
