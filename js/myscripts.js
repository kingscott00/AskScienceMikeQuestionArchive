var tagColumnIndex = 3; // This is the index of the "Tag" column in the table
var checkedTags = []; // when filter is activated, this will be the checked check boxes
var tags = [
    //Science field
    "Astronomy",
    "Geology",
    "Neurology",
    "Psychology",
    "Physics",
    "Cosmology",
    "Mathematics",
    //Science categories
    "Humans",
    "Animials",
    "Evolution",
    "Creation",
    //Religous
    "Christianity",
    "Faith",
    "Bible",
    "Truth seeking",
    "God",
    "Prayer",
    "Doubt",
    "Afterlife",
    "Spiritual",
    //Fun
    "Fun",
    "Trama",
    "Relationship",
    "Marriage",
    //Other fields
    "History",
    "Epistemology"];

function filterApplyClick() {
    getCheckedTags();
    console.log(checkedTags.length);
    console.log(checkedTags[0]);
    console.log(checkedTags[1]);
    filterRowsByCheckedTags();
}

function filterResetClick() {
    clearCheckedTags();
    checkedTags = [];
    filterRowsByCheckedTags();
}

function getCheckedTags() {
    checkedTags = [];
    var tagIndex = 0;

    var checkBoxes = document.getElementsByName("filterCheckBox");

    for (var i = 0; i < checkBoxes.length; i++) {
        element = checkBoxes[i];

        if (element.type == "checkbox") {
            if (element.checked) {
                checkedTags[tagIndex] = element.value.trim();
                tagIndex++;
            }
        }
    }

    // // get the form
    // var tagCheckboxes = document.getElementById('filterByTagCheckBoxes');
    // //console.log(tagCheckboxes);
    // // loop through elements in form
    // for (var i = 0; i < tagCheckboxes.childElementCount; i++) {

    //     var element = tagCheckboxes.childNodes[i];
    //     //console.log(element);

    //     var cb = element.childNodesp[0].childNodes[0];
    //     console.log(cb);

    //     if (element.hasChildNodes) {
    //         console.log(i + " has child node");
    //         //sconsole.log(element.childNodes[i]);
    //     }


    //     // if the element is checkbox and checked, add to array
    //     if (element.type == "label") {
    //         //console.log(element);
    //         if (element.checked) {
    //             checkedTags[tagIndex] = element.value.trim();
    //             tagIndex++;
    //         }
    //     }
    // }

    // // loop through elements in form
    // for (var i = 0; i < tagCheckboxes.length; i++) {

    //     var element = tagCheckboxes[i];
    //     console.log(tagCheckboxes[i]);
    //     // if the element is checkbox and checked, add to array
    //     if (element.type == "label") {

    //         if (element.checked) {
    //             checkedTags[tagIndex] = element.value.trim();
    //             tagIndex++;
    //         }
    //     }
    // }
}

function filterRowsByCheckedTags() {
    // get the table
    var table = document.getElementById('table-questions');

    // loop through the rows of table
    for (var i = 2; i < table.rows.length; i++) {

        if (checkedTags.length > 0) {
            // get array of tags from tag column
            var rowTags = table.rows[i].cells[tagColumnIndex].innerHTML.split(",");
            var bFoundTag = false;

            for (var x = 0; x < rowTags.length; x++) {
                //console.log(rowTags[x]);

                if (checkedTags.includes(rowTags[x].trim())) {
                    bFoundTag = true;
                    break;
                }
            }

            if (!bFoundTag) {
                table.rows[i].classList.add('hidden-row');
            } else {
                table.rows[i].classList.remove('hidden-row');
            }
        } else {
            table.rows[i].classList.remove('hidden-row');
        }
    }
}

function clearCheckedTags() {
    checkedTags = [];
    var tagIndex = 0;

    // get the form
    var checkBoxes = document.getElementsByName("filterCheckBox");

    // loop through elements in form
    for (var i = 0; i < checkBoxes.length; i++) {

        var element = checkBoxes[i];

        // if the element is checkbox and checked, add to array
        if (element.type == "checkbox") {
            element.checked = false;
            tagIndex++;
        }
    }
}

function filterPanelTitleClick() {
    var el = document.getElementById('filterPanelHeaderIcon');
    if (el.classList.contains('glyphicon-triangle-right')) {
        el.classList.remove('glyphicon-triangle-right');
        el.classList.add('glyphicon-triangle-bottom');
        el.classList.remove('filterPanelSmall');
    } else {
        el.classList.add('glyphicon-triangle-right');
        el.classList.remove('glyphicon-triangle-bottom');
        el.classList.add('filterPanelSmall');
    }



}
