var shouts = {
    number4: "24",
    number5: "120",
    number6: "720",
    number7: "5040",
    number8: "40320",
    number9: "362880",
};

function shoutbox(select) {
    // Получаем выбранный элемент списка:
    var selected = select.options[select.selectedIndex];
    // Если значение элемента есть в ключах shouts:
    if (selected.value in shouts) {
        // Меняем сообщение под списком:
        document.getElementById("result").innerHTML = "Результат: " + shouts[selected.value];
    } else {
        // Иначе просто очищаем блок для сообщения:
        document.getElementById("result").innerHTML = "";
    }
}