let table = document.querySelector('table tbody');
let tableHead = document.querySelector('.table-head h1');
let navs = document.querySelectorAll(".nav-bar ul li");
let search = document.getElementById("search");
let numRows = document.getElementById("number-of-rows");

navs.forEach(li => {
    li.addEventListener('click', function() {
        let text = this.querySelector("a").innerHTML;
        tableHead.innerHTML = text;
    });
});

for (let i = 0; i < 9; i++) {
    table.innerHTML += `
        <tr>
            <td class="Id">${i + 2}</td>
            <td class="name">mahmoud</td>
            <td class="email">mahmoud@gmail.com</td>
            <td class="remove"><i class="fa-solid fa-trash"></i></td>
        </tr>`;
}

search.addEventListener("input", () => {
    let filter = search.value.toLowerCase();
    let rows = document.querySelectorAll("table tbody tr");

    let count = 0;
    rows.forEach(row => {
        let text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            count += 1;
            numRows.innerHTML = count
            row.style.display = ""; 
        } else {
            row.style.display = "none";
        }
    });
});
