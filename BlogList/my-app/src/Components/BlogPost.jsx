import React from 'react'
import { useParams } from 'react-router-dom';

export default function BlogPost(props) {

  const { blogs } = props;

  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === parseInt(id));
  /*La méthode find() permet de chercher dans un tableau d'objets, le 1er élément qui correspond à une certaine condition.
  Ici, l'ID de l'objet dans le tableau doit correspondre à la valeur de l'ID unique passé dans l'URL de la page.
  parseInt() permet de convertir l'ID unique, qui est initialement une chaîne de caractères, en un nombre entier.*/

  if (!blog) return <pre>Le blog est introuvable</pre>
  /*Si aucun blog n'est trouvé, un message d'erreur est retourné.
  La balise <pre></pre> permet d'afficher un texte préofrmaté, c'est-à-dire, un texte qui conserve la mise en forme du texte.*/

  return (
    <div className='blog-card__page'>
      <h1 className='blog-card__articleNumber'>Article N°{blog.id}</h1>
      <h2 className='blog-card__title'>{blog.title}</h2>
      <p className='blog-card__summary'>{blog.summary}</p>
    </div>
  );
}