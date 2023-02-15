
import './App.css';
import { BrowserRouter as RouterContainer, Routes, Route } from 'react-router-dom';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';
import ProfileDetails from './Components/ProfileDetails';
import Profile from './Components/Profile';

function App() {

  const blogs = [
    {
      id: 1,
      title: 'Titre 1',
      summary: "Aliquam pellentesque at purus nec fringilla."
    },

    {
      id: 2,
      title: 'Titre 2',
      summary: "Curabitur varius mattis lorem sit amet tempor."
    },

    {
      id: 3,
      title: 'Titre 3',
      summary: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
    },

    {
      id: 4,
      title: 'Titre 4',
      summary: "Vivamus dignissim laoreet sapien, sit amet volutpat odio varius eleifend."
    }
  ]

  const user = [
    {
      id: 1,
      username: "John Doe",
      email: "johndoe@example.com",
      avatar: "https://cdn.discordapp.com/attachments/1066333553601818674/1075438117470871662/IMG_20230110_130554.jpg"
    },

    {
      id: 2,
      username: "Jane Doe",
      email: "janedoe@example.com",
      avatar: "https://cdn.discordapp.com/attachments/1066333553601818674/1066334255338246275/Clara_OC_Moon.jpg"
    },

    {
      id: 3,
      username: "Bob Smith",
      email: "bobsmith@example.com",
      avatar: "https://cdn.discordapp.com/attachments/1066333553601818674/1066335011491549324/Jelena_Moon.png"
    }
  ]

  return (
    <RouterContainer>
      <Routes>
        <Route path='/' element={<BlogList blogs={blogs} />} />
        <Route path='/blog/:id' element={<BlogPost blogs={blogs} />} />
        <Route path='/profiledetails' element={<ProfileDetails user={user} />} />
        <Route path='/profile/:id' element={<Profile user={user} />} />
      </Routes>
    </RouterContainer>
  );
}

export default App;
