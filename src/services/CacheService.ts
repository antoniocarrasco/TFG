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
    setSession(session: any) {
        this.user = session;
        localStorage.setItem('SESSION', JSON.stringify(session))
    }
}

export default new CacheService();