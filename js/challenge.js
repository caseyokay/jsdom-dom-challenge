document.addEventListener("DOMContentLoaded", function(){
    let countLog 
    const clickHandler = () => {
        document.addEventListener("click", function(e){
            // console.log(e.target)
            if (e.target.id === ("plus")){
                increaseCount()
            } else if (e.target.id === "minus"){
                decreaseCount()
            } else if (e.target.id === "heart"){
                // console.log("heart")
                addHeart(counter.textContent)
            } else if (e.target.id === "pause"){
                pauseCounter()
                e.target.textContent = "resume"
                e.target.id = "resume"
                document.querySelector("#minus").disabled = true
                document.querySelector("#plus").disabled = true
                document.querySelector("#heart").disabled = true
            } else if (e.target.id === "resume"){
                startCount()
                e.target.textContent = "pause"
                e.target.id = "pause"
                document.querySelector("#minus").disabled = false
                document.querySelector("#plus").disabled = false
                document.querySelector("#heart").disabled = false
            }
        })
    }
    const submitHandler = () => {
        document.addEventListener("submit", function(e){
            if (e.target.id === ("comment-form")){
                e.preventDefault()
                const commentForm = e.target
                const commentValue = commentForm["comment"].value 
                const commentDiv = document.querySelector("div.comments")
                const commentP = document.createElement("p")
                commentP.textContent = commentValue
                commentDiv.append(commentP)
           }
        })
    }

    const heartHash = {}
    function addHeart(currentNum){
        if (heartHash[currentNum]){
            heartHash[currentNum]+= 1
        } else {
            heartHash[currentNum] = 1
        }
    renderHearts()
    }
//IMPORTANT CONCEPT
    function renderHearts(){
        const likes = document.querySelector(".likes")
        // console.log(likes)
        likes.innerHTML = ""
        for(const time in heartHash){
            const li = document.createElement("li")
            li.textContent = `Number ${time} has ${heartHash[time]} likes.`
            likes.append(li)
        } 
    }

    function increaseCount(){
        const counter = document.querySelector("#counter")
        const num = parseInt(counter.textContent)
        const newNum = num+1
       counter.textContent = newNum
    }
    function decreaseCount(){
        const counter = document.querySelector("#counter")
        const num = parseInt(counter.textContent)
        const newNum = num-1
       counter.textContent = newNum
    }

    function startCount(){
        countLog = window.setTimeout(() => {
             const counter = document.querySelector("#counter")
             const num = parseInt(counter.textContent)
             const newNum = num+1
            counter.textContent = newNum
            startCount()
         }, 1*1000)
         
    }

    function pauseCounter(){
        clearTimeout(countLog) 
    }

    clickHandler()
    submitHandler()
    startCount()
})


//if e.target.id === "like" do 
//find like button. add another condition to clickHandler. 
// build & call another function
// we want to have a hash with numbers as keys and the 
// (number of) likes as value.
// where does it go? ul class: likes stores: ils
// iterate through hash we made and for each iteration
// create an li -> put data in there & append it.