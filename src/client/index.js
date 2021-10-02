
import { handleSubmit } from "./js/formHandler"
import './styles/resets.scss'
import './styles/base.scss'
import './styles/results.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener('DOMContentLoaded',()=>{
    const submitbBtn=document.querySelector('.btn-submit')
    submitbBtn.addEventListener("click",(event)=>{
        console.log("addEventListener works")
        handleSubmit(event)
    })
})

