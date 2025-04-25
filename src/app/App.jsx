import { useRoutes } from 'react-router-dom'
import routes from './routes'

function App() {
  const app = useRoutes(routes)
  return app
}

export default App
