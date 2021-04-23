import React, {useState} from "react";
import { Button, Checkbox} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import {numb, upperCaseLetters, lowerCaseLetters, specialCharacters} from "../characters";




function Form() {

const [password, setPassword] = useState("");
const [passwordLength, setPasswordLength] = useState(10);
const [lowerCase, setLowerCase] = useState(false);
const [upperCase, setUpperCase] = useState(false);
const [symbols, setSymbols] = useState(false);
const [numbers, setNumbers] = useState(false);



function handleGeneratePass(event) {
let characterList = "";

if (lowerCase === true) {
  characterList = characterList + lowerCaseLetters;
}

if (upperCase === true) {
  characterList = characterList + upperCaseLetters;
}

if (numbers === true) {
  characterList = characterList + numb;
}

if (symbols === true) {
  characterList = characterList + specialCharacters;
}
setPassword(createPassword(characterList));
}

function createPassword(characterList){
  let password = "";
  const characterListLength = characterList.length;

  for(let i=0; i < passwordLength; i++) {
    const characterIndex = Math.round(Math.random() * characterListLength)
    password = password + characterList.charAt(characterIndex)
  }
return password
}

function copyToClipboard(){
  const newTextArea = document.createElement("textarea")
  newTextArea.innerText = password
  document.body.appendChild(newTextArea)
  newTextArea.select()
  document.execCommand("copy")
  newTextArea.remove()
}

function handleCopy(e){
  copyToClipboard()
}







  return  <form className="form1">
    <label>Password Length</label>
    <input
    type="number"
    defaultValue={passwordLength} 
    onChange={(e) => setPasswordLength(e.target.value)}
    min={1} 
    max={20}
    />

    <label>Lowercase Characters
    <Checkbox 
    name="checkLow"
    checked={lowerCase}
    onChange={(e) => setLowerCase(e.target.checked)}
    
    />
    (e.g. abcdefg)
    </label>

    <label>Uppercase Characters
    <Checkbox 
    name="checkUpper"
    checked={upperCase}
    onChange={(e) => setUpperCase(e.target.checked)}
    />
    (e.g. ABCDEFG)
    </label>

    <label>Symbols
    <Checkbox
    name="checkSymbol"
    checked={symbols}
    onChange={(e) => setSymbols(e.target.checked)}
    />
    (e.g. !@#$%)
    </label>

    <label>Numbers
    <Checkbox
    name="checkNumber"
    checked={numbers}
    onChange={(e) => setNumbers(e.target.checked)}
    />
    (e.g. 12345)
    </label>
    <Button onClick={handleGeneratePass}>Generate Password</Button>


    <div className="sameLine">
    <h3>Your New Password: {password}</h3> 
    <Button id="copyText" className="copyButton" onClick={handleCopy} ><AssignmentReturnedIcon className="colorButton"/></Button>
    
    </div>
        </form>

    

}

export default Form;
