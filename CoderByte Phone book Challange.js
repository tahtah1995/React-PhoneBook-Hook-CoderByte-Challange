import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
 
 
const style = {
 
 
 
 
  table: {
 
    boxShadow: '0 0 20px rgb(0,0,0,0.15)',
    borderCollapse: 'collapse' ,
    minWidth: '400px' ,
    fontFamily: ' sans-serif' ,
    margin: '25px , 0',
    fontSize:'0.9em',
 
  },
  tableCell: {
 
    padding: '12px 15px',
 
  },
   tableCellTd:{
 padding: '12px 15px'
  } ,
  tableCellTr:{
    fontWeight:'bold' ,
 borderBottom:'1px solid #dddddd',
 
  }
,
  tableCellThead:{
   textAlign:'left' ,
  color:'#ffffff' ,
  backgroundColor:'#009879' ,
 
  }
  ,
tableCellTbody:{
color:'009879',
 backgroundColor:'#f3f3f3'
}
,
  form: {
     backgroundColor: '#98d4f3' ,
      color: 'white' ,
 
    label: {
      top: '0' ,
      left: '0' ,
      display:'inline-block' ,
      postion: 'absolute' ,
      padding: '10px 15px' ,
      transition: 'all .3s ease-in-out' ,
      borderTopLeftRadius: '3px' ,
       borderTopBottomRadius: '3px',
       fontFamily: ' "Comic Sans MS", "Comic Sans", cursive' ,
      fontSize: '17px'
    } ,
 
    container: {
 
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px' ,
      marginTop:'25px' ,
      display:'inline-block' ,
 
 
 
    },
    inputs: {
     width:'220px' ,
     padding:'12px' ,
     display:'inline-block' ,
     height: '34px' ,
     bottom: '14px' ,
     right:'9px' ,
     verticalAlign: 'middle',
     postion: 'relative' ,
     borderRadius:'22px' ,
     resize: 'vertical' , 
     boxSizing : 'border-box' , 
     padding: '0 18px' , 
     outline: 'none' , 
     border: 'none'
 
    },
    submitBtn: {
 
 
      marginTop: '50px',
      marginLeft: '100px' , 
      marginBottom: '10px' ,
      padding: '10px 15px',
      border:'none',
      backgroundColor: '#e58f0e',
      fontSize: '17px',
      fontFamily: ' "Comic Sans MS", "Comic Sans", cursive' ,
     borderRadius:'40px' ,
     width:'230px' ,
     color: 'white'
 
    }
  }
}
 
function PhoneBookForm(props) {
 
//handle all the data the we from our event in form and getting the vakue from our e evet object
  const hanldeSubmit = e => {
    e.preventDefault();
    let firstName = e.target.userFirstname.value;
    let lastName = e.target.userLastname.value;
    let phone = e.target.userPhone.value;
 
    props.saveObj({userFirstname: firstName, userLastname: lastName, userPhone: phone});
  }
 
  return (
    <form onSubmit={hanldeSubmit} style={style.form.container} style={style.form}>
      <label style= {style.form.label}>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        defaultValue="Coder"
      />
      <br/>
      <label style= {style.form.label}>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        defaultValue="Byte"
      />
      <br />
      <label style= {style.form.label}>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        defaultValue="8885559999"
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}
 
function InformationTable(props) {
  return (
    <table style={style.table} className='informationTable'>
      <thead style={style.tableCellThead}> 
        <tr style={style.tableCellTr}>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody style={style.tableCellTbody}>
      {
        //here we go through all data in array object attriated it using our key and have data
        props.list.map((item, idx) =>          
            <tr key={idx+1}>
              <td>{item.userFirstname}</td>
              <td>{item.userLastname}</td>
              <td>{item.userPhone}</td>
            </tr>
        )
      }
      </tbody>
    </table>
  );
}
 
function Application(props) {
 
  // our hooks using usestate
  const [list, setList] = useState([]);
//saving our dating coming the hook usestate go push all objects data to sort according to last name
  const saveToArr = obj => {
    let t = Array.from(list);
    t.push(obj);
    t = t.sort((a,b) => a.userLastname.toLowerCase().localeCompare(b.userLastname.toLowerCase()));
    setList(t);
  }
 
  return (
    <section>
      <PhoneBookForm saveObj={obj => saveToArr(obj)} />
      <InformationTable list={list} />
    </section>
  );
}
 
 
ReactDOM.render(
 
  <Application />,
  document.getElementById('root')
)