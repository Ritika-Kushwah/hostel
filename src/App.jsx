import View_Student_Out_Hostel from "./Pages/View_Student_Out_Hostel";
import Dashboard_add_defaulter from "./Pages/Dashboard_add_defaulter";
import View_Student_In_Hostel from "./Pages/View_Student_In_Hostel";
import View_Students from "./Pages/View_Students";
import View_Students_Assigned_Room from "./Pages/View_Students_Assinged_Hostel";
import View_Students_Unassigned_Room from "./Pages/View_Students_Unassigned_Hostel";
import View_Students_Removed_Hostel from "./Pages/View_Students_Removed_Hostel";
import Add_Defaulter_Confirm from "./Pages/Add_Defaulter_Confirm";

import "./App.css";

function App() {
  return (
    <>
      <View_Student_Out_Hostel />
      <View_Student_In_Hostel />
      <View_Students />
      <View_Students_Assigned_Room />
      <View_Students_Unassigned_Room />
      <View_Students_Removed_Hostel />
      <Add_Defaulter_Confirm />
      <Dashboard_add_defaulter />
    </>
  );
}

export default App;
