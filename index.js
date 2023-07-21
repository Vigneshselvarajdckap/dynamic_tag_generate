const tags = [
    {
        "p":"p",
        "heading":["h1","h2","h3","h4","h5","h6"],
        "input":[
                {
                "type":["range","date","color","text","password","number"]
                }
                ],
        "button":"button",
        "div":"div",
    }
]

const main = document.querySelector(".main")
const selectTagHead = document.createElement("select")
const PtagButton = document.createElement("button")
const buttonTag = document.createElement("button")
const divTag = document.createElement("button")
const inputTag = document.createElement("button")
const selectTagInputType = document.createElement("select")

main.append(selectTagHead)

let textex =  "hi gokulaKrishnan";

for (let i = 0; i < tags.length; i++) {
    let headingTags = tags[i].heading

    for (let h = 0; h < headingTags.length; h++) {
        let optionTagHead = document.createElement("option")
        optionTagHead.innerText = headingTags[h]
        selectTagHead.append(optionTagHead)
    }

    let pTag = tags[i].p
    PtagButton.innerText = `${pTag} Tag`
    main.append(PtagButton)

    let buttontas = tags[i].button
    buttonTag.innerText = `${buttontas} Tag`
    main.append(buttonTag)

    let divTags = tags[i].div
    divTag.innerText = `${divTags} Tag`
    main.append(divTag)

    inputTag.innerText = `input Tag`
    main.append(inputTag)



    inputTag.addEventListener("click",()=>{
        let inputTypes = tags[i].input
        for (let t = 0; t < inputTypes.length; t++) {
            let inputTypess = inputTypes[t].type

            for (let l = 0; l < inputTypess.length; l++) {

                let optionTagInputType = document.createElement("option")
                optionTagInputType.innerText = inputTypess[l]
                selectTagInputType.append(optionTagInputType)
                main.append(selectTagInputType)
            }
        }
    })

    selectTagInputType.addEventListener("click",()=>{
        let inputVal = document.createElement("input")
        inputVal.type = selectTagInputType.value
        inputVal.placeholder = selectTagInputType.value
        main.append(inputVal)
    })

    divTag.addEventListener("click",()=>{
        let createDiv = document.createElement("div")
        createDiv.innerText = textex
        main.append(createDiv)
    })

    buttonTag.addEventListener("click",()=>{
        let createButton = document.createElement("button")
        createButton.innerText = textex
        main.append(createButton)
    })

    PtagButton.addEventListener("click",()=>{
        let craetePTag = document.createElement("p")
        craetePTag.innerText = textex
        main.append(craetePTag)
    })

    selectTagHead.addEventListener("click",()=>{
        let seType = selectTagHead.value
        let hradTag = document.createElement(seType)
        hradTag.innerText = textex
        main.append(hradTag)
    })
}