//Функция для сосздания Структуры данных, где храниться информация о студенте
function makeStudent(fio, group, sex, birthday, city) {
    return {
        fio: fio,
        group: group,
        sex: sex,
        birthday: birthday,
        city: city
  };
}

//Класс описывающий элемент связного списка
class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

//Класс описывающий связный список
class LinkedList {
    constructor() {
        // головной атрибут содержит указатель на первый узел нашего связного списка
        this.head = null
        this.length = 0
    }

    insert(data) {
        // Вставка в начало связного списка
        // головной элемент становится вторым
        this.head = new Node(data, this.head)
        this.length++
    }

    // удаляет любое значение данных из связного списка
    remove_value(value) {

        let prevNode = null
        let currentNode = this.head

        while (currentNode) {
            if (JSON.stringify(currentNode.data) === JSON.stringify(value)){
                if (prevNode) {
                    prevNode.next = currentNode.next
                } else {
                    this.head = currentNode.next
                }
                currentNode = null
                this.length--
                return true
            }

            prevNode = currentNode
            currentNode = currentNode.next
        }
    }
}

//Функция для получения данных из элемента связного списка
function get_Node(value, List){
    let idx = 1
    let node = List.head
    while (idx !== value) {
        node = node.next
        idx += 1
    }
    return node.data
}