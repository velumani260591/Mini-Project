
/*----------- Adding number to display or input text area-------------*/
function append(value)
{
  document.getElementById('display').value+=value;
}

/*------------ deleting all data in the text area or display area---------------*/
function clr()
{
  document.getElementById('display').value='';
}

/*----------------- Deleting last number form the input area---------------*/
function lastdigit()
{
  let current=document.getElementById('display').value;
  document.getElementById('display').value=current.slice(0,-1);
}

/*-------------- final calculate area -------------------------*/

function calculate() {

  /*---------------------this code give security error so we got the below for this math function only */
  // try {
  //   document.getElementById('display').value = eval(document.getElementById('display').value);
  // } catch (e) {
  //   document.getElementById('display').value = "Error";
  

  // it gives more security compare to above code
  try
  {
    const data=document.getElementById('display').value;
    const checking=data.replace(/[^-()\d/*+.]/g, '');
      const result=new Function('return '+checking)();
      document.getElementById('display').value=result;
  } catch(e)
  {
      document.getElementById('display').value="Error"
  }
}
