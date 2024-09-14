
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage"
import WorkbookPage from "./pages/WorkbookPage"
import IncomingPage from "./pages/IncomingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,createBrowserRouter,RouterProvider, createRoutesFromElements, Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/workbook" element={<WorkbookPage/>} />
      <Route path="/incoming" element={<IncomingPage/>} />
      
    </Route>
  ))

  return <RouterProvider router={router}/>
}

export default App
