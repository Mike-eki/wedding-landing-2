const modal = document.querySelector("#modal")
console.log(modal)

function handleModal() {
    modal.classList.toggle("modal-open")
    console.log(modal.classList[0])
}

async function copy(id){
    let element = document.getElementById(id)
    // Ask for user to have permission to copy
    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
          alert("¡Acceso permitido para copiar!");
        }
      });
    // Copy process API
    try {
        await navigator.clipboard.writeText(element.textContent)
        alert('¡Texto copiado!')
    } catch(error) {
        alert('No se pudo copiar', error)
    }
}