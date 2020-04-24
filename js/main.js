//Создаём связный список для работы.
let StudentList = new LinkedList();
//Получаем нашу таблицу
let my_table = document.getElementById('main_table');

//load_list(StudentList,,my_table)
print_row(my_table,StudentList);

window.onload = function () {
    let add_bttn = document.getElementById('add_button');
    add_bttn.onclick = function() {
        addStudent(my_table,StudentList);
    };

    let save_bttn = document.getElementById('save_button');
    save_bttn.onclick = function() {
       exportTableToCSV('students.csv',StudentList);
    };

    //Обработчик кнопки удаления
    del_func = function (id){
        deleteStudent(id, my_table, StudentList);
    };

    //Обработчик кнопки загрузить файл
    upload = function(input) {
        StudentList = new LinkedList();
        load_list(StudentList,input, my_table);
    };
};




