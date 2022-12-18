/* Desenvolva sua lógica aqui...*/
import { requestUsers } from "../../scripts/requests.js"
import { requestRepository } from "../../scripts/requests.js"

let arrayRecentSearch = JSON.parse(localStorage.getItem('@GitSearch:recentSearch')) || []

export async function searchUsers(){

    const formButtonSeeProfile = document.querySelector('.form-button-see-profile')
    const formInput = document.querySelector('.form-input')
    formButtonSeeProfile.addEventListener('click', function(evt){
        evt.preventDefault()
        requestUsers(formInput.value)
        //requestRepository(formInput.value)
    })
}
searchUsers()




function enableDisableButtonSearch(){
    const formInput = document.querySelector('.form-input')
    const formButtonSeeProfile = document.querySelector('.form-button-see-profile')
    
    formButtonSeeProfile.classList.add('disable-button')
    formButtonSeeProfile.disabled = true

    formInput.addEventListener('input', (event)=>{
        event.preventDefault()
        
        
        if(formInput.value == ''){ 
            formButtonSeeProfile.classList.add('disable-button')
            formButtonSeeProfile.disabled = true
        }else{

            formButtonSeeProfile.classList.remove('disable-button')
            formButtonSeeProfile.disabled = false
        }
    })
}
enableDisableButtonSearch()




export let showMessageUserNotFound = ()=>{
    const labelNotFound = document.querySelector('.form-label-not-found')
    labelNotFound.innerHTML = 'Usuário não encontrado!'
    labelNotFound.classList.add('form-label-not-found-active')
}




export let hideMessageUserNotFound = ()=>{
    const labelNotFound = document.querySelector('.form-label-not-found')
    labelNotFound.classList.remove('form-label-not-found-active')
}




export let showMessageFoundUser = () => {
    const labelNotFound = document.querySelector('.form-label-not-found')
    labelNotFound.innerHTML = 'Sucesso!'
    labelNotFound.classList.add('form-label-found')
}




export let hideMessageFoundUser = () => {
    const labelNotFound = document.querySelector('.form-label-not-found')
    labelNotFound.innerHTML = 'Sucesso!'
    labelNotFound.classList.remove('form-label-found')
}




export function redirectProfilePage(){
window.location.assign('../../pages/profile/index.html')
}




export function loadButtonWithSpinner(){
    
    const formButtonSeeProfile = document.querySelector('.form-button-see-profile')
    const imgSpinnerButton = document.createElement('img')
    formButtonSeeProfile.innerText = ''
    imgSpinnerButton.src = '/assets/spinner.png'
    imgSpinnerButton.width = '30px'
    imgSpinnerButton.height = '30px'
    formButtonSeeProfile.append(imgSpinnerButton)

}




export function saveObjectInLocalStorage(objectJson){

    arrayRecentSearch.push(objectJson)
    if(arrayRecentSearch.length > 3){
        arrayRecentSearch.shift()
    }
    localStorage.setItem('@GitSearch:recentSearch', JSON.stringify(arrayRecentSearch))
}




function renderDataInLocalStorage(){
    
    const recentSearchUl = document.querySelector('.recent-search-ul')
    arrayRecentSearch.forEach(element => {
        const recentSearchUsers = document.createElement('li')
        const searchUsersImg = document.createElement('img')
        const spanMessage = document.createElement('span')

        spanMessage.classList.add('icon-message')
        recentSearchUsers.classList.add('recent-search-li')
        recentSearchUsers.setAttribute('id', element.id)
        searchUsersImg.classList.add('search-users-img')

        spanMessage.innerText = 'Acessar perfil'
        searchUsersImg.src = element.avatar_url
        recentSearchUsers.append(searchUsersImg, spanMessage)
        recentSearchUl.appendChild(recentSearchUsers)
    });    
}
renderDataInLocalStorage()




export let errorMessage = () => {
    const  dataRightTitle = document.querySelector('.data-right_title')
    dataRightTitle.innerText = 'ALGUM ERRO ESTÁ ACONTECENDO!'
    dataRightTitle.style.color =  'red'
}




export let saveRenderInLocalStorage = (resOfRequest) => {
    localStorage.setItem('@GitSearch:resOfRequest', JSON.stringify(resOfRequest))
}




export function saveReposInLocalStorage(resOfRequest){
    localStorage.setItem('@GitSearch:userRepository', JSON.stringify(resOfRequest))

}




function getEventRecentSearch(){

    const recentSearchLiNode = document.querySelectorAll('.recent-search-li')
    recentSearchLiNode.forEach(element => {
        element.addEventListener('click', function(evt){
            
            arrayRecentSearch.forEach(async (user)=>{

                if(element.id == user.id){
                    localStorage.setItem('@GitSearch:resOfRequest',JSON.stringify(user))
                   await requestRepository(user.login)
                    redirectProfilePage()

                }

            })
        })
    });
}
 getEventRecentSearch()




function getOverButtonRecentSearch(){

    const recentSearchLiNode = document.querySelectorAll('.recent-search-li')
    recentSearchLiNode.forEach(element => {
        element.addEventListener('mouseover', function(evt){
            
            arrayRecentSearch.forEach((user)=>{

                if(element.id == user.id){
                
                   element.lastChild.classList.add('icon-message-active')


                }

            })
        })
    });

}
getOverButtonRecentSearch()




function getOutButtonRecentSearch(){

    const recentSearchLiNode = document.querySelectorAll('.recent-search-li')
    recentSearchLiNode.forEach(element => {
        element.addEventListener('mouseout', function(evt){
            
            arrayRecentSearch.forEach((user)=>{

                if(element.id == user.id){
                
                  element.lastChild.classList.remove('icon-message-active')

                   
                }

            })
        })
    });

}
getOutButtonRecentSearch()