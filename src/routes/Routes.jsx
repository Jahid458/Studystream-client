import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import CreateAssignments from "../pages/CreateAssignments";
import MyAttemptAssign from "../pages/MyAttemptAssign";
import Assignments from "../pages/Assignments";
import PendingAssignments from "../pages/PendingAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      
      {
        path:'/create-Assign',
        element:<PrivateRoute>
          <CreateAssignments></CreateAssignments>
        </PrivateRoute>
        
      },
      {
        path:'/my-attempt-assign',
        element: <PrivateRoute>
          <MyAttemptAssign></MyAttemptAssign>
        </PrivateRoute>
      },
      {
        path:'/Assignments',
        element: <Assignments></Assignments>
      },
      {
        path:'/pen-assignment',
        element:
        <PrivateRoute>
            <PendingAssignments></PendingAssignments>
        </PrivateRoute>
      }

    ]
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  }
]);

export default router;
