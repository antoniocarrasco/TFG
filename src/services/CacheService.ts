class CacheService {
    user = {};
    setUser(user: object) {
        this.user = user;
    }
}

export default new CacheService();