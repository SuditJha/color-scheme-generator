const formEl = document.getElementById('form')

formEl.addEventListener('submit', (e)=>{
    e.preventDefault()
    const colorSchemeData = new FormData(formEl)
    const color = colorSchemeData.get('color').slice(1)
    const mode = document.getElementById('mode').value.toLowerCase()
    console.log(mode)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
        .then(res => res.json())
        .then( data => {
            // console.log(data)
            renderColors(data.colors)
    })
})

function renderColors(colors){
    // console.log(colors[0].hex.value)

    let html = ''
    for( color of colors){
        html += `
        <div class="column" id="${color.hex.value}">
            <div class="color" style="background-color:${color.hex.value};"></div>
            <h4 class="hex-code" >${color.hex.value}</h4>
        </div>
        `
    }
    document.getElementById('color-scheme-container').innerHTML = html

}

{/* <div class="colomn">
                <div class="color" style="background-color:${color.hex.value};"></div>
                <h4 class="hex-code">${color.hex.value}</h4>
            </div> */}
