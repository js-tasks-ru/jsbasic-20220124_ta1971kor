function highlight(table) {
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];

        let statusCell = row.cells[3];
        let available = statusCell.dataset.available;
        if (available == null) {
            row.setAttribute("hidden", true);
        } else if (available === "true") {
            row.classList.add("available");
        } else {
            row.classList.add("unavailable");
        }

        let genderCell = row.cells[2];
        let gender = genderCell.innerText;
        if (gender === "m") {
            row.classList.add("male");
        } else if (gender === "f") {
            row.classList.add("female");
        }

        let ageCell = row.cells[1];
        let age = ageCell.innerText;
        if (+age < 18) {
            row.style.textDecoration = "line-through";
        }
    }
}
