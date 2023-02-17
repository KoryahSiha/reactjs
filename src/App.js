import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Counter from './Components/Counter';

function App() {

  const [productList, setproductList] = useState([
    {
      title: "Darksiders II",
      image: "https://i0.wp.com/www.games-geeks.fr/wp-content/uploads/2012/03/darksiders-ii-collector-1.jpg?ssl=1",
      description: "Devenez la terreur que tout le monde craint. Réveillé par la fin des temps, Mort, le plus redouté des légendaires quatre cavaliers de l'apocalypse embarque dans une quête pour venger son frère. En cours de route, le cavalier découvrira qu'une vieille rancune menace potentiellement toute la Création. Mort vit !",
    },
    {
      title: "Remnant: From the Ashes",
      image: "https://www.mobygames.com/images/covers/l/791352-remnant-from-the-ashes-windows-apps-front-cover.jpg",
      description: "Remnant: From the Ashes est un jeu de tir à la troisième personne de type action-survie, dans un monde post-apocalyptique envahi de créatures cauchemardesques. Incarnant l'un des derniers survivants, vous devrez lutter en solo ou en groupe avec jusqu'à deux autres joueurs contre des hordes d'ennemis redoutables et des boss épiques pour défendre vos positions, reconstruire et reprendre ce qui a été perdu.",
    },
    {
      title: "Chronos: Before the Ashes",
      image: "https://www.consollection.com/image/cover/test-chronos-before-the-ashes-un-lien-direct-avec-remnant-from-the-ashes-9445.jpg",
      description: "Chronos: Before the Ashes est un RPG d'ambiance où sont contées les chroniques d'un héros qui a voué sa vie à sauver sa patrie d'un terrible péril. Gagnez en sagesse, en force et en puissance à mesure que vous vous enfoncez dans les profondeurs d'un mystérieux labyrinthe. Mais prenez garde, le labyrinthe exige un lourd tribut, car chaque fois que votre héros meurt, il perdra une année de sa vie !",
    },
  ])

    return (
      <div className='card'>
      {productList.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
      {<Counter />}
    </div>
    );
}

export default App;
