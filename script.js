function updateRangeValue() {
    var range = document.getElementById("area");
    var defaultValue = document.getElementById("defaultValue");
    defaultValue.textContent = range.value + " km";
}