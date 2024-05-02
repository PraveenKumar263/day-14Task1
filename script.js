// Create label
function label_create(tagName, attrName, attrVal, content){
    let ele = document.createElement(tagName);
    ele.setAttribute(attrName, attrVal);
    ele.innerHTML = content;
    return ele;
}

// Label tag
function input_tag(inputTag, attrName, attrVal, attrName1, attrVal1, attrVal2){
    let input_ele = document.createElement(inputTag);
    input_ele.setAttribute(attrName, attrVal);
    input_ele.setAttribute(attrName1, attrVal1);
    if(attrVal ==='form-control' && attrVal2 != ""){
        input_ele.setAttribute('placeholder', attrVal2);
        input_ele.setAttribute('required', '');
    }
    else if(attrVal === 'radio' && attrVal2 != ""){
        input_ele.setAttribute("name", "Gender");
        input_ele.className = "form-check-input";
        input_ele.value = attrVal2;
        input_ele.setAttribute('required', '');
    }
    else if(attrVal === 'checkbox' && attrVal2 != ""){
        input_ele.value = attrVal2;
        input_ele.setAttribute("name", "Food");
    }
    return input_ele;
}

// Create button
function button_create(inputTag, attrName, attrVal, attrName1, attrVal1, contents, className){
    let input_ele = document.createElement(inputTag);
    input_ele.setAttribute(attrName, attrVal);
    input_ele.setAttribute(attrName1, attrVal1);
    input_ele.innerHTML = contents;
    input_ele.className = className;
    return input_ele;
}

// Line break
function break_line(){
    let break_ele = document.createElement("br");
    return break_ele;
}

// Create div element with class
function div_create(classname){
    let ele = document.createElement("div");
    ele.className = classname;
    return ele;
}

// apply css format or others
function formatMultipleElements(query, property) {
    let results = document.querySelectorAll(query);
    results.forEach(input => {input.style = property;});
}

// clear the form inputs
function clearForm() {
    // clear text
    document.querySelectorAll('input[type="form-control"]').forEach(input => {
        input.value = "";
    });
    document.querySelectorAll('textarea').forEach(input => {
        input.value = "";
    });
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = "";

    });
    // clear checkbox selections
    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });

    // clear radio selections
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = false;
    });
}

// Fill up table
function populateTable(){
    const tr = document.createElement("tr");
    let input_R = document.querySelectorAll('input, textarea');
    let inputs = Array.from(input_R).filter(item => {
        if (item.type === 'text' || item.type === 'textarea') {
            return true;
        } else {
            return item.checked;
        }
    });
    let foodSelected = 0;
    for(let i=0; i<inputs.length; i++) {
        let input = inputs[i];
        if(input.name==='Food') {
            if(foodSelected===0) {
                foodSelected = 1;
                let foodChoicesQ = document.querySelectorAll('#foodForm input[type="checkbox"]:checked');
                let foodChoices = [];
                foodChoicesQ.forEach(food=>foodChoices.push(food.value));
                addCell(foodChoices.join(', '), tr);
            }
        }
        else{
            addCell(input.value, tr);
        }
    }
    tbody.appendChild(tr);
    clearForm();
}

// Create the label and input for the form fields
const label_firstName = label_create("label", "for", "first-name", "First Name: ");
const input_firstName = input_tag("input", "type", "form-control", "id", "first-name", "First Name");

const label_lastName = label_create("label", "for", "last-name", "Last Name: ");
const input_lastName = input_tag("input", "type", "form-control", "id", "last-name", "Last Name");

const label_address = label_create("label", "for", "address", "Address: ");
const input_address = document.createElement('textarea');
input_address.id="address";
input_address.setAttribute("required", "");
input_address.setAttribute("placeholder","Address")

const label_pincode = label_create("label", "for", "pincode", "Pincode: ");
const input_pincode = input_tag("input", "type", "text", "id", "pincode", "");
input_pincode.setAttribute("required", "");
input_pincode.setAttribute("placeholder","Pincode")

// Gender
const label_gender = label_create("label", "for", "", "Gender: ");
const label_genderM = label_create("label", "for", "male", "Male");
const label_genderF = label_create("label", "for", "female", "Female");
const label_genderO = label_create("label", "for", "others", "Others");
label_genderM.className =  "form-check-label mr-2";
label_genderF.className =  "form-check-label mr-2";
label_genderO.className =  "form-check-label mr-2";
const input_genderM = input_tag("input", "type", "radio", "id", "male", "Male");
const input_genderF = input_tag("input", "type", "radio", "id", "female", "Female");
const input_genderO = input_tag("input", "type", "radio", "id", "others", "Others");

// Food
const label_foodChoice= label_create("label", "for", "", "");
label_foodChoice.innerHTML = "Choice of Food: <p id='description'>(must choose atleast 2 out of 5 options)</p>";
const label_SouthIndiaFood = label_create("label", "for", "southIndian", "South Indian");
const label_NorthIndiaFood = label_create("label", "for", "northIndian", "North Indian");
const label_ChineseFood = label_create("label", "for", "chinese", "Chinese");
const label_ThaiFood = label_create("label", "for", "thai", "Thai");
const label_WesternFood = label_create("label", "for", "western", "Western");
const input_SouthIndiaFood = input_tag("input", "type", "checkbox", "id", "southIndian", "South Indian");
const input_NorthIndiaFood = input_tag("input", "type", "checkbox", "id", "northIndian", "North Indian");
const input_ChineseFood = input_tag("input", "type", "checkbox", "id", "chinese", "Chinese");
const input_ThaiFood = input_tag("input", "type", "checkbox", "id", "thai", "Thai");
const input_WesternFood = input_tag("input", "type", "checkbox", "id", "western", "Western");

const label_state = label_create("label", "for", "state", "State: ");
const input_state = input_tag("input", "type", "form-control", "id", "state", "State");

const label_country = label_create("label", "for", "country", "Country: ");
const input_country = input_tag("input", "type", "form-control", "id", "country", "Country");

const submitButton = button_create("button", "type", "submit", "id", "submit", "Submit", "btn btn-primary btn-md btn-block");

// Build of overall structure
const container = div_create("container ml-2 mr-2");
const row = div_create("row");
const formCol = div_create("col-md-3");
const tableCol = div_create("col-md-9 mt-2");

// Creation of Form div elements
const div_FirstName = div_create("form-group");
const div_LastName = div_create("form-group");
const div_Address = div_create("form-group");
const div_PIN = div_create("form-group");
const div_Gender = div_create("form-group");
div_Gender.id="genderForm";
const div_GenderM = div_create("form-check form-check-inline");
const div_GenderF = div_create("form-check form-check-inline");
const div_GenderO = div_create("form-check form-check-inline");
const div_Food = div_create("form-group");
div_Food.id = "foodForm";
const div_State = div_create("form-group");
const div_Country = div_create("form-group");
const div_Button = div_create("form-group");

// Add label and input elements to form div
div_FirstName.append(label_firstName, break_line(), input_firstName), break_line();
div_LastName.append(label_lastName, break_line(), input_lastName, break_line());
div_Address.append(label_address, break_line(), input_address, break_line());
div_PIN.append(label_pincode, break_line(), input_pincode, break_line());
div_State.append(label_state, break_line(), input_state, break_line());
div_Country.append(label_country, break_line(), input_country);
div_Button.appendChild(submitButton);

// Gender radio option setup
div_GenderM.append(label_genderM, input_genderM);
div_GenderF.append(label_genderF, input_genderF);
div_GenderO.append(label_genderO, input_genderO);
div_Gender.append(label_gender, break_line(), div_GenderM, div_GenderF, div_GenderO);

// Food checkbox option setup
div_Food.append(label_foodChoice,break_line(),input_ChineseFood,label_ChineseFood,break_line(),input_NorthIndiaFood,label_NorthIndiaFood,break_line(),
input_SouthIndiaFood,label_SouthIndiaFood,break_line(),input_ThaiFood,label_ThaiFood,break_line(),
input_WesternFood,label_WesternFood,break_line()
)

// Form tag, with the each form input as a div
const form = document.createElement("form");
form.id="form";
form.innerHTML = `<h1 id='title'>Form Submission:</h1>`;
form.append(div_FirstName,div_LastName,div_Address,div_PIN,
    div_Gender,div_Food,div_State,div_Country,div_Button
);

// Create table
const table = document.createElement("table");
table.className = "table table-striped";
const thead = document.createElement("thead");
thead.className = "thead-dark";
const trow = document.createElement("tr");

document.body.appendChild(container);
container.appendChild(row);
row.append(formCol,tableCol);
formCol.appendChild(form);
tableCol.appendChild(table);

// Css formating of the food checkbox inputs
formatMultipleElements('#foodForm input[type="checkbox"]','margin-right: 5px'); // food
formatMultipleElements('#genderForm input[type="radio"]','margin-right: 2px'); // gender
formatMultipleElements('input[type="form-control"]','width: 100%'); // text inputs
formatMultipleElements('textarea','width: 100%'); // text inputs
formatMultipleElements('input[type="text','width: 100%'); // text inputs
formatMultipleElements('p','font-style: italic'); // text inputs

// Create table headers
const headers = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Food', ' State', 'Country'];
headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    trow.appendChild(th);
});
thead.appendChild(trow);
table.appendChild(thead);

// Create table body, rows & cells
const tbody = document.createElement("tbody");
table.appendChild(tbody);
function addCell(value, tr) {
    const cell = document.createElement("td");
    cell.textContent = value;
    tr.appendChild(cell);
}

// Add event listener to the form
const formVar = document.getElementsByTagName("form")[0];
formVar.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const checkboxes = document.querySelectorAll('#foodForm input[type="checkbox"]:checked');
    if (checkboxes.length < 2) {
        // raise alert
        window.alert("Please select at least two food options.", "");
    } 
    else {
        // to submit form
        populateTable();
    }
});

