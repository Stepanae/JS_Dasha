//Функция которая печатает в самом начале весь список студентов
function print_row(result_table,List){
    clear_place();
    if (List.head == null){
        let p = document.createElement("td");
        p.setAttribute("id","p_table");
        p.setAttribute("colspan","6");
        p.appendChild(document.createTextNode("Список студентов пуст"));
        result_table.appendChild(p);
    }else {
        for (let i = 1; i < List.length+1; i++){
            let tr = document.createElement("tr");
            tr.setAttribute("id", i);

            let student = get_Node(i,List);
            for (key in student){
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(student[key]));
                tr.appendChild(td);
            }

            let td = document.createElement("td");
            let button = document.createElement("button");
            button.setAttribute("class","delete_button");
            let pic = document.createElement("img");
            pic.setAttribute("onclick","del_func("+i+")");
            pic.src = "img/trash.svg";
            pic.alt = "Удалить";
            pic.height = "20";
            pic.width = "20";
            button.appendChild(pic);
            td.appendChild(button)
            tr.appendChild(td);

            result_table.appendChild(tr);
        }
    }
}

//Допечатывает нового студента
function add_row(result_table,student,Length) {
    let row = document.getElementById("p_table");
    if (row != null){
        row.remove();
    }

    let tr = document.createElement("tr");
    tr.setAttribute("id", Length);

    for (key in student){
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(student[key]));
        tr.appendChild(td);
    }

    let td = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("class","delete_button");
    let pic = document.createElement("img");
    pic.setAttribute("onclick","del_func("+Length+")");
    pic.src = "img/trash.svg";
    pic.alt = "Удалить";
    pic.height = "20";
    pic.width = "20";
    button.appendChild(pic);
    td.appendChild(button)
    tr.appendChild(td);

    result_table.appendChild(tr);

    print_alert("for_alert","alert alert-success alert-dismissible fade show", "Студент успешно добавлен!");
    setTimeout(delete_alert, 1500);
}

//Убирает строку с удалёным студентом
function delete_row(List, id, result_table) {
    let row = document.getElementById(id);
    row.remove();
    if (List.head == null) {
        clear_place();
        let p = document.createElement("td");
        p.setAttribute("id","p_table");
        p.setAttribute("colspan","6");
        p.appendChild(document.createTextNode("Список студентов пуст"));
        result_table.appendChild(p);
    }
    print_alert("for_alert","alert alert-danger alert-dismissible fade show", "Студент успешно удалён!");
    setTimeout(delete_alert, 1500);
}

function clear_place() {
    let result = document.getElementById("main_table");
    let rows = result.getElementsByTagName("tr");
    while (rows.length)
        rows[0].parentNode.removeChild(rows[0]);

    rows = result.getElementsByTagName("td");
    while (rows.length)
        rows[0].parentNode.removeChild(rows[0]);
}



function print_alert(id,type,text) {
    let code = document.getElementById(id);

    let div = document.createElement("div");
    div.setAttribute("class", type);
    div.setAttribute("role", "alert");
    div.appendChild(document.createTextNode(text));

    let button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","close");
    button.setAttribute("data-dismiss","alert");
    button.setAttribute("aria-label","Close");

    let span = document.createElement("span");
    span.setAttribute("aria-hidden","true");
    span.appendChild(document.createTextNode('x'));

    button.appendChild(span);
    div.appendChild(button);
    code.appendChild(div);
}

function delete_alert() {
    let for_delete = document.getElementsByClassName("alert");
    while (for_delete.length)
        for_delete[0].parentNode.removeChild(for_delete[0]);
}