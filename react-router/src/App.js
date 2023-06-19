
import './App.css';
import {Routes, Route, Outlet, useParams, useOutletContext,useLocation, useNavigate } from 'react-router-dom';

import Nav from './component/Nav'
function App() {
  return (
    <div className="App">
      <h1> React Router Workshop </h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/users/*" element={<Users/>}>
            <Route path=":id" element={<User/>} />
            <Route path="me" element={<UserMe/>} />
        </Route>
        <Route path="/loc" element={<Loc/>} />

        <Route path="*" element={<Unknown/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

function Home() {
  const navigate = useNavigate();

  return (
    <main>
    <h2>This is HOME</h2>
    <p>
    <a href onClick={() => {
      navigate('/users')
    }}>go to users</a></p>
    </main>
   
    
  )
}


function Users() {
  return (
    <main>
    <h2>This is USERS</h2>

    <Outlet context={{marvelous: Date()}} />

    <Routes>
      <Route path=":id" element={<User/>} />
        <Route path="me" element={<UserMe/>} />
    </Routes>
    </main>
  )
}

function User() {
  const params = useParams()
  const context = useOutletContext()
  const marvelous = context ? context.marvelous : "";
  const {id} = params
  return (
    <main>
    <h2>This is {id}</h2>
    <p> the marvelous data is {marvelous}</p>
    </main>
  )
}

function UserMe() {
  const params = useParams()
  const context = useOutletContext()
  const marvelous = context ? context.marvelous : "";
  const {id} = params
  
  return (
    <main>
    <h2>This  is {id}</h2>
    <p>The Omoba david omo ton so!! {marvelous}</p> 
    </main>
  )
}

function Unknown() {
  return (
    <main>
      <h1>Page Not found</h1>
    </main>
  )
}

function Loc() {
const {pathname, search, hash, state} = useLocation()
  return (
    <main>
      <h1>{pathname}</h1>
      <h1>{search}</h1>
      <h1>{hash}</h1>
      <h3>{JSON.stringify(state)}</h3>
    </main>
  )
}

function Footer() {
  return (
    <main>
    <h6>[facebook twitter linkedin]</h6></main>
  )
}