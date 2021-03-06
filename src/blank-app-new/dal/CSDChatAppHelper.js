import {UserInfo} from "../entity/UserInfo.js"
import {UserInfoRepository} from "../repository/UserInfoRepository.js"

class CSDChatAppHelper {
    constructor(userInfoRepository, productRepository)
    {
        this._userInfoRepository = userInfoRepository
        this._productRepository = productRepository
    }

    saveUser(userInfo)
    {
        //...
        return this._userInfoRepository.save(userInfo)
    }

    updateUser(userInfo)
    {
        //...
        return this._userInfoRepository.update(userInfo)
    }

    exitsUserByUsername(username)
    {
        //...
        return this._userInfoRepository.existsByUsername(username)
    }

    getAllUsers()
    {
        //...
        return this._userInfoRepository.all
    }

    static getInstance()
    {
        return g_chatAppHelper
    }
}


let g_chatAppHelper = new CSDChatAppHelper(UserInfoRepository.getInstance())

export {CSDChatAppHelper}
