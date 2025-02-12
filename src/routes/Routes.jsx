import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import CreateAssignments from "../pages/CreateAssignments";
import MyAttemptAssign from "../pages/MyAttemptAssign";
import Assignments from "../pages/Assignments";
import PendingAssignments from "../pages/PendingAssignments";
import Home from "../pages/Home/Home";
import UpdateAssignment from "../pages/UpdateAssignment";
import AssignmentDetails from "../pages/AssignmentDetails";
import TeacherDetails from "../pages/TeacherDetails";
import ContactPage from "../components/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        index: "/",
        element: <Home />,
      },
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
      },
      {
        path:'/allAssignment/:id',
        element:<UpdateAssignment></UpdateAssignment>
      },
      {
        path:'/assignmentDetails/:id',
        element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>
      },
      {
        path:'teacherDetails',
        element:<TeacherDetails></TeacherDetails>
      },
      {
        path: 'contact',
        element:<ContactPage></ContactPage>
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
