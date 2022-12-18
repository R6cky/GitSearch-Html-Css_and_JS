import { showMessageUserNotFound } from "../pages/home/index.js"
import { hideMessageUserNotFound } from "../pages/home/index.js"
import { showMessageFoundUser } from "../pages/home/index.js"
import { hideMessageFoundUser } from "../pages/home/index.js"
import { redirectProfilePage } from "../pages/home/index.js"
import { loadButtonWithSpinner } from "../pages/home/index.js"
import { saveObjectInLocalStorage } from "../pages/home/index.js"
import { errorMessage } from "../pages/home/index.js"
import { saveRenderInLocalStorage } from "../pages/home/index.js"
import { saveReposInLocalStorage } from "../pages/home/index.js"


export async function requestUsers(user){

            try{
            const request = await fetch(`https://api.github.com/users/${user}`)
            const requestJson = await request.json()

            if(requestJson.message == undefined){
                // Mostrar mensagem de sucesso para usuário -- OK
                // salvar usuário pesquisado na tela inicial, para que usuário veja pesquisas recentes -- OK
                // Redireciono usuário para homePage
                // Renderizo dados do usuário na homePage
                requestRepository(requestJson.login)
                setTimeout(showMessageFoundUser, 0)
                setTimeout(loadButtonWithSpinner, 0)
                setTimeout(hideMessageFoundUser, 4000)
                saveObjectInLocalStorage(requestJson)
                saveRenderInLocalStorage(requestJson)
                setTimeout(redirectProfilePage, 1000)
            }else{
                setTimeout(showMessageUserNotFound(), 1000)
                setTimeout(hideMessageUserNotFound, 2000)
                //chamo função que informa usuário que não existe usuário com o nome inserido
            }
                return requestJson
            }catch{
                errorMessage()
            }

}




export async function requestRepository(user){

    try{

        const requestRepo = await  fetch(`https://api.github.com/users/${user}/repos`)
        const requestRepoJson = await requestRepo.json()
        saveReposInLocalStorage(requestRepoJson)
        return requestRepoJson
    }catch{

        errorMessage()

    }
}

