import './App.css';
import {
  Route, RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { Fragment } from 'react';
import Root from "./routes/Root";
import DashboardPage from "./views/DashboardPage";
import AccountInfoPage from "./views/AccountInfoPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<Root />}>
        <Route index path='/' element={<DashboardPage />}></Route>
        <Route path='/accountInfo' element={<AccountInfoPage />}></Route>
      </Route>
    </Fragment>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
