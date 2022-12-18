/* Desenvolva sua lógica aqui...*/

const resOfRender = JSON.parse(localStorage.getItem('@GitSearch:resOfRequest'))
const resOfRepository = JSON.parse(localStorage.getItem('@GitSearch:userRepository'))

console.log(resOfRender)



export function renderUserProfile(objetoUser){

    const profileSection = document.querySelector('.profile-section')

    const headerProfile = document.createElement('div')
    const dataUserProfile = document.createElement('div')
    const userImg  = document.createElement('div')
    const userImgFile = document.createElement('img')
    const userNameAndOccupation = document.createElement('div')
    const userName = document.createElement('h3')
    const userOccupation = document.createElement('span')

    const mailAndSwapUser = document.createElement('div')
    const mailButton = document.createElement('button')
    const swapUserButton = document.createElement('button')

    


    headerProfile.classList.add('header-profile')
    dataUserProfile.classList.add('data-user-profile')
    userImg.classList.add('user-img')       
    userImgFile.classList.add('user-img-file')
    userNameAndOccupation.classList.add('user-name-and-occupation')
    userName.classList.add('user-name')
    userOccupation.classList.add('user-occupation')
    mailAndSwapUser.classList.add('mail-and-swap-user')
    mailButton.classList.add('mail-button')
    swapUserButton.classList.add('swap-user-button')
    

    userImgFile.src = objetoUser.avatar_url

    

    if(objetoUser.name == null){
        userName.innerText = 'Nome não disponível.'
    }else{
        userName.innerText = objetoUser.name
    }

    if(objetoUser.bio == null){
        userOccupation.innerText = 'Bio não disponível.'
    }else{
        userOccupation.innerText = objetoUser.bio
    }

    if(objetoUser.email == null){
        mailButton.innerText = 'Email não disponível.'
    }else{
        mailButton.innerText = objetoUser.email
    }
    swapUserButton.innerText = 'Trocar usuário'


    userImg.append(userImgFile)
    userNameAndOccupation.append(userName,userOccupation)
    dataUserProfile.append(userImg,userNameAndOccupation)
    mailAndSwapUser.append(mailButton,swapUserButton)
    headerProfile.append(dataUserProfile,mailAndSwapUser)
    profileSection.appendChild(headerProfile)

    const profileData = document.createElement('div')
    const profileDataUl = document.createElement('ul')
    profileData.classList.add('profile-data')
    profileDataUl.classList.add('profile-data-ul')


    

        if(resOfRepository.length > 0){

                const profileData = document.createElement('div')
                const profileDataUl = document.createElement('ul')
                profileData.classList.add('profile-data')
                profileDataUl.classList.add('profile-data-ul')


                resOfRepository.forEach(repository => {
            
                const profileDataCards = document.createElement('li')
                const cardsTitle = document.createElement('h3')
                const cardsDescription = document.createElement('p')
                const cardsButton = document.createElement('div')
                const repositoryButtonLink = document.createElement('a')
                const repositoryButton = document.createElement('button')
                const demoButtonLink = document.createElement('a')
                const demoButton = document.createElement('button')
                    
                
                profileDataCards.classList.add('profile-data-cards')
                cardsTitle.classList.add('cards-title')
                cardsDescription.classList.add('cards-description')
                cardsButton .classList.add('cards-button')
                repositoryButton.classList.add('repository-button')
                demoButton.classList.add('demo-button')
    
    
    
                cardsTitle.innerText = repository.name
                cardsDescription.innerText = repository.description
                

                repositoryButtonLink.href = repository.svn_url
                repositoryButtonLink.innerText = 'Repositório'
                demoButtonLink.innerText = 'Demo'

                repositoryButton.append(repositoryButtonLink)
                demoButton.append(demoButtonLink)
                cardsButton.append(repositoryButton,demoButton)
                profileDataCards.append(cardsTitle,cardsDescription,cardsButton)
                profileDataUl.append(profileDataCards)
                profileData.append(profileDataUl)
                profileSection.append(profileData)

            });

        }

}
renderUserProfile(resOfRender)




let buttonSwapUser = () => {

    const swapUserButton = document.querySelector('.swap-user-button')

    swapUserButton.addEventListener('click', ()=>{
       window.location.assign('/pages/home/index.html')
    })
}
buttonSwapUser()






