function displayname(){
    let t=document.getElementById("name")
    let val=t.value
    let h=document.getElementById("heading")
    // alert(val)
    h.innerText="Hello "+val
}

function red(){
    let box=document.getElementById("box-1")
    box.style.backgroundColor="red"

}

function blue(){
    let box=document.getElementById("box-2")
    box.style.backgroundColor="blue"

}

function green(){
    let box=document.getElementById("box-3")
    box.style.backgroundColor="green"

}

function yellow(){
    let box=document.getElementById("box-4")
    box.style.backgroundColor="yellow"

}
