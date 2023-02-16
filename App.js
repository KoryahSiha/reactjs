import { useState } from 'react';
import TaskList from './Components/TaskList';
import Card from './Components/Card';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();

    setTodoList([...todoList, task])
    setTask("");
  }

  const [cards, setCards] = useState([
    {
      image: "https://c.pxhere.com/photos/e5/0a/cat_animal_cat_portrait_mackerel_cat_s_eyes_pet_fur_domestic_cat-675399.jpg!d",
      title: "Chat",
      description: "Le Chat domestique (Felis silvestris catus) est la sous-espèce issue de la domestication du Chat sauvage (Felis silvestris), mammifère carnivore de la famille des Félidés.",
    },
    {
      image: "https://c.pxhere.com/photos/b8/a7/persian_leopard_leopard_snow_winter_full_length_portrait_forest_portrait_close-498610.jpg!d",
      title: "Panthère des neiges",
      description: "La Panthère des neiges (Panthera uncia, précédemment Uncia uncia), aussi appelée Léopard des neiges, Once ou Irbis, est une espèce de félins de la sous-famille des Pantherinae.",
    },
    {
      image: "https://c.pxhere.com/photos/e5/da/animal_big_cat_safari_tiger_wild_cat_wildlife_zoo-1169706.jpg!d",
      title: "Tigre",
      description: "Le Tigre (Panthera tigris) est une espèce de mammifère carnivore de la famille des félidés (Felidae) du genre Panthera.",
    },
  ])

    return (

      <div className='card'>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>

      // <div className="App">
      //   <h1 className='task__title'>Bienvenue sur la TodoApp</h1>
      //   <form onSubmit={(event) => addTask(event)}>
      //     <input value={task} onChange={(event) => setTask(event.currentTarget.value)} className='task__add' type="text" placeholder='Nouvelle tâche' />
      //      <button type='submit'>Ajouter tâche</button>
      //   </form>
      //     <TaskList tasksList={todoList} />
      // </div>
    );
}

export default App;