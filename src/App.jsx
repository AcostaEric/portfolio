import { Container } from '@chakra-ui/react'
import { Home } from './components/home/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/projects/Projects'

function App() {


  return (
    <>
    <Navbar/>
    <Container maxW='container.xl'>
      <Home />
      <Projects />
    </Container>
    </>
  )
}

export default App
