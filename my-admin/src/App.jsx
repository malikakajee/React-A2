import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Admin } from 'react-admin'
import { createTrailbaseProvider } from '/workspaces/React-A2/my-admin/ra-trailbase.js';
const TRAILBASE_URL = "https://refactored-space-waffle-r4r56grr4v69c5rq4-4000.app.github.dev/";
const{dataProvider,authProvider} = await createTrailbaseProvider(TRAILBASE_URL,)

function App() {
 

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}>

    </Admin>
  )
}

export default App
