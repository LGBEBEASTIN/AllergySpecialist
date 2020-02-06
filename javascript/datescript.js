function datescript () {
var currentDate = new Date(),
    day = currentDate.getDate(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear();

$(".datescript").append("Today Is: " + month + "/" + day + "/" + year)
}

datescript();