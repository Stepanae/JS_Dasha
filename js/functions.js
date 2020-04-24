//Функция добавления студента
function addStudent(table,List) {
    let fio = String($('#fio').val());
    let groups = Number($('#group').val());
    let sex = String($('#sex').val());
    let birth = String($('#birth').val());
    let city = String($('#city').val());
    let group = groups.toString();
    let student = makeStudent(fio, group, sex, birth, city);

    List.insert(student);

    add_row(table,student,List.length);
}

//Функция удаления студента
function deleteStudent(id,table,List){
    let student_for_delete = document.getElementById(id);
    let fio = student_for_delete.cells[0].textContent;
    let group = student_for_delete.cells[1].textContent;
    let sex = student_for_delete.cells[2].textContent;
    let birth = student_for_delete.cells[3].textContent;
    let city = student_for_delete.cells[4].textContent;
    let student = makeStudent(fio, group, sex, birth, city);

    List.remove_value(student);

    delete_row(List, id, table);
}

//Функция поиска по таблице (происк происходит по всем колонкам)
function tableSearch(result_table) {
    let row = document.getElementById("p_table");
    if (row != null){
        row.remove();
    }
    let phrase = document.getElementById('search');
    let table = document.getElementById('main_table');
    let regPhrase = new RegExp(phrase.value, 'i');
    let count = 0;
    let flag = false;
    for (let i = 0; i < table.rows.length; i++) {
        flag = false;
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
            count = count+1;
        } else {
            table.rows[i].style.display = "none";
        }

    }
    if (count === 0){
        let p = document.createElement("td");
        p.setAttribute("id","p_table");
        p.setAttribute("colspan","6");
        p.appendChild(document.createTextNode("Совпадений нет"));
        result_table.appendChild(p);
    }
}