import { useRoutes } from 'react-router-dom'
import useScrollToTop from '@/hooks/useScrollToTop'
import routes from './routes'

function App() {
  useScrollToTop()
  const app = useRoutes(routes)
  return app
}

export default App
