import './App.css';

function App() {

  return (
    <center>
  <div class="bg">
    <div id='demo'>
    <form>
      <h2>Car Booking Form</h2><br></br>
      <table>
     
      <tr>
      <td id="t1">Name:</td> <td><input id="t" type = 'text' placeholder="Enter your name"></input><br></br></td>
      </tr><br></br>
      <tr>
      <td id="t1">Contact Number:</td> <td><input id="t"type = 'text' placeholder="Enter your phone number"></input><br></br></td>
      </tr><br></br>
      <tr>
      <td id="t1">Address:</td> <td><input id="t" type = 'text' placeholder="Enter your residential address"></input><br></br></td>
      </tr><br></br>
      <tr>
        <td id="t1">Gender:</td>
        <td>
      Male<input id="c" type="radio"></input>Female<input id="c" type="radio"></input>
      </td>
      </tr>
      <tr>
        <td id="t1">
          Select Payment Option:
        </td>
        <td>
          FULL AMOUNT<input id="c" type="checkbox"></input>
          EMI<input id="c" type="checkbox"></input>
        </td>
      </tr><br></br>
      <tr>
        <td id="t1">
          Select Payment Method:
        </td>
        <td>
          Cash<input id="c" type="checkbox" ></input>
          UPI<input id="c" type="checkbox" ></input>
          Card<input id="c" type="checkbox" ></input>
        </td>
      </tr><br></br>
      <tr>
        <td id="t1">Select a Brand:</td>
      <td>
        <select>
        <option value="Honda">
          Choose a brand
          </option>
          <option value="Honda">
          Honda
          </option>
          <option value="Toyota">
           Toyota 
          </option>
          <option value="MG">
           MG 
          </option>
          <option value="Ford">
            Ford
            </option>
            <option value="Huyndai">
            Huyndai
            </option>
        </select>
      </td>
      </tr><br></br>
      
     </table>
      <center><input id="s" type = 'submit' value = 'submit'></input><br></br></center>
     
      
    </form>
    </div>
    </div>
    </center>
  )
}

export default App;
