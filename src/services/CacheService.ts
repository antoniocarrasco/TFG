import ApiService from "./ApiService";

class CacheService {
    user = {};
    isAdmin = false;
    setUser(user: object | any) {
        this.user = user;
        ApiService.getIsAdmin(user.uid).then((isAdmin) => {
            this.isAdmin = isAdmin;
        });
    }
}

export default new CacheService();