button();

function button() {
  let buttonElement=document.querySelector('#buttons');
  buttonElement.innerHTML=`
  <div id="first">
    <button id="clear">AC</button>
    <button>%</button>
    <button>/</button>
    </div>
  <div>
    <button>9</button>
    <button>8</button>
    <button>7</button>
    <button>*</button>
    </div>
    <div>
    <button>6</button>
    <button>5</button>
    <button>4</button>
    <button>-</button>
    </div>
    <div>
    <button>3</button>
    <button>2</button>
    <button>1</button>
    <button>+</button>
    </div>
    <button>0</button>
    <button>.</button>
    <button>=</button>
  `
  
}
