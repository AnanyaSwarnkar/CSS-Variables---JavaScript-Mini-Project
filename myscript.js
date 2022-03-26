//Select inputs to change their values
const inputs = document.querySelectorAll('.controls input');

//console.log(inputs);

function handleUpdate(){
    const suffix = this.dataset.sizing || ""; //unit(eg. px)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //hover cursor over it
