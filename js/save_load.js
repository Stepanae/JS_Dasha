
//Функция сохранения CSV-файла
function downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    csvFile = new Blob([csv], {type : 'text/csv;charset=utf-8'});

    downloadLink = document.createElement("a");

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();
    print_alert("for_alert","alert alert-primary alert-dismissible fade show", "Файл успешно сохранён.");
    setTimeout(delete_alert, 1500);
}

//Преобразуем данные для CSV
function exportTableToCSV(filename, List) {
    let csv = ['fio,group,sex,birthday,city,'];

    for (let i = 1; i < List.length+1; i++){
        let student = get_Node(i,List);
        let row = [];
        for (key in student){
            row.push(student[key]);
        }
        row.push("");
        csv.push(row.join(","));
    }

    // Вызываем функцию для сохранения
    downloadCSV(csv.join("\n"), filename);
}

//функция загрузки файла
function load_list(List,input,resalt_table) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        let a = reader.result.replace(/\r?\n/g, "");
        arr = a.split(',');
        for (let i = 5; i < arr.length-1; i=i+5){
            let student = makeStudent(arr[i],arr[i+1],arr[i+2],arr[i+3],arr[i+4])
            List.insert(student);
        }
        print_row(resalt_table,List);

        print_alert("for_alert","alert alert-primary alert-dismissible fade show", "Список студентов успешно отображён.");
        setTimeout(delete_alert, 1500);
    };
}