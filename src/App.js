import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name:'Cão',
      primaryColor:'#E8F8FF',
      secondaryColor:'#82CFFA',
    },
    {
      name:'Gato',
      primaryColor:'#D9F7E9',
      secondaryColor:'#57C278',
    },
    {
      name:'Pássaro',
      primaryColor:'#FFF5D9',
      secondaryColor:'#FFBA05',
    },
    {
      name:'Roedor',
      primaryColor:'#FAE9F5',
      secondaryColor:'#DB6EBF',
    },
    {
      name:'Peixe',
      primaryColor:'#FDE7E8',
      secondaryColor:'#E06B69',
    },
    {
      name:'Furão',
      primaryColor:'#F0F8E2',
      secondaryColor:'#A6D157',
    },
  ]

  const [collaborators, setCollaborators] = useState([])

  const whenNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }
  
  return (
    <div className='App'>
      <Banner />
      <Form teams={teams.map(team => team.name)} newCollaborator={collaborator => whenNewCollaborator(collaborator)} />
      {teams.map(team => <Team key={team.name} name={team.name} pColor={team.primaryColor} sColor={team.secondaryColor} collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} />)}
      <Footer />
    </div>
  );
}

export default App;