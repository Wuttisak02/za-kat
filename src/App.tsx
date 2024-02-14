import './App.css';
import {
  Route, RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { Fragment } from 'react';
import Root from "./routes/Root";
import DashboardPage from "./views/DashboardPage";
import DoneeManagementPage from "./views/DoneeManagementPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<Root />}>
        <Route index path='/' element={<DashboardPage />}></Route>
        <Route path='/doneeManagement' element={<DoneeManagementPage />}></Route>
      </Route>
    </Fragment>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
