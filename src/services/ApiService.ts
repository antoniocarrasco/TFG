import app from "../firebase"

import { ref, set, onValue, get, child, update, remove } from "firebase/database";
import { getDatabase } from "firebase/database";

const db = getDatabase(app);

class ApiService {
    get(url: string) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, url))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    return snapshot.val();
                } else {
                    console.log("No data available");
                    return false;
                }
            });
    }
    getUser(idUser: any) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, `user/${idUser}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    return snapshot.val();
                } else {
                    console.log("No data available");
                    return false;
                }
            });
        // catch((error) => {
        //     console.error(error);
        // });
    }
    postExample(body: any) {
        return set(ref(db, '/example/'), body);
    }
    postUser(idUser: any, body: any) {
        return set(ref(db, `/user/${idUser}/`), body);
    }
    postPeso(idUser: any, body: number[]) {
        set(ref(db, `/user/${idUser}/currentWeight`), body[body.length - 1]);
        return set(ref(db, `/user/${idUser}/weights/`), body);
    }
    postProgress(idUser: any, body: any) {
        return set(ref(db, `/progress/${idUser}/`), body);
    }
    updateUser(key: any, body: any) {
        return update(ref(db, `/user/${key}/`), body);
    }
    updateRecipe(key: any, body: any) {
        return update(ref(db, `/recipesU/${key}/`), body);
    }
    deleteUser(key: any) {
        return remove(ref(db, `/user/${key}/`));
    }
    start() {
        db
    }
}

export default new ApiService();