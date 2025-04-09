import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PromptForm from "./pages/form"
import LandingPage from './pages/landingPage'
export default function App() {
  // Initialize form with React Hook Form
  
 return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/courseGen' element={<PromptForm/>}/>
   </Routes>
   </BrowserRouter>
   </> )
}