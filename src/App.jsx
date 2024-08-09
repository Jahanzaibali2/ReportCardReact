import React from 'react'
import '/src/App.css'
export default function App() {
  return (
    <div>
      <Heading />
      <SearchStudentThroughId />
    </div>
    
  )
}
function StudentsFinalProfile(){
  return(
  <div>
    <StudentProfile StudentName={"Muhammad Shumail"} 
    studentId = {1001}
    ChemMarks = {89} 
    PhyMarks = {60} 
    MathMarks = {9}/>
    <StudentProfile StudentName={"Jahanzaib Ali"}
    studentId = {1002}
    ChemMarks = {9} 
    PhyMarks = {54} 
    MathMarks = {9}/>
    <StudentProfile StudentName={"Rana Shahmeer Ali"} 
    studentId = {1003}
    ChemMarks = {69} 
    PhyMarks = {84} 
    MathMarks = {89}/>
  </div>
  )
}


function SearchStudentThroughId(props){
  let inputId = document.getElementsByClassName("val").value;
  return(
    <>
      <p>Enter the student Id you want to search : </p> 
      
      <input type="number" className="val"/>
      
   <button onClick={SearchStudent(props , inputId)}> Search Student </button>
    </>

  )
}

function SearchStudent(props , id){

  
  while(props.id != id){
    if(props.id == id){
      StudentProfile(props);
    }
  }
}

function StudentProfile(props) {
  let total = props.ChemMarks + props.PhyMarks + props.MathMarks
  var percent = ((total)/300) * 100;


return(
    <div className="Student">
      
      <h1>Student Name : {props.StudentName}</h1>
      <p>Student Id : {props.studentId}</p>
      <p>Marks in chemistry : {props.ChemMarks}</p>
      <p>Marks in Physics : {props.PhyMarks}</p>
      <p>Marks in Maths : {props.MathMarks}</p>
      <p>Total Marks : {total} / 300</p>
      <p>Total Percentage : {percent.toFixed(3)} %</p>

    </div>

  )

}


function Heading() {
  return (
    <header>
      <h1> Student Report Card</h1>
    </header>


  )
}

//Student name 3 subject k marks total aur unki %

// import React from 'react'

// export default function App() { //works as the main function in java :)
//   return (
//     <>
//       <Hoes FullName = {"Zazzy Bhai"} sex = {"Pohancho"}/>
    
//     </>
//   )
// }

// function Hoes(props){
//   return(
//     <div className="profile">
//     <h1>Full Name : {props.FullName}</h1> 
//     <h1>sex : {props.sex}</h1> 
   
//     </div>
//   )
// }

// // function HeaderBody(){
// //   const name = 'Zhumail Zazzy'
// //   return(
// //     <>
// //     <h1> {name}</h1>
    
// //     </>
// //   )
// // }

// // // function MainBody() {
// // //   return (
// // //     <>
// // //       <p>INSIDE MAIN</p>
// // //     </>
// // //   )
// // // }

// // // function Footer() {
// // //   return (
// // //     <>
// // //       <h2>Pohancho</h2>
// // //     </>
// // //   )
// // // }


