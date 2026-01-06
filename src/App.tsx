import TasksPage from './pages/TasksPage';
import { AppProviders } from './app/providers/providers';

function App() {
  return (
    <AppProviders>
      <TasksPage />
    </AppProviders>
  );
}

export default App;