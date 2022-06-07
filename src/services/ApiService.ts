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
    getRecipesUser(idUser: any ){
        const dbRef = ref(getDatabase());
        return get(child(dbRef, `recipesU/${idUser}`))
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
    updateRecipe(idUser: any,key: any, body: any) {
        return update(ref(db, `/recipesU/${idUser}/${key}/`), body);
    }
    updateRecipeP(key: any, body: any) {
        return update(ref(db, `/recipesP/${key}/`), body);
    }
    deleteUser(key: any) {
        return remove(ref(db, `/user/${key}/`));
    }
    start() {
        db
    }

    postSport(uid: string, body: any) {
        const date = new Date().getTime();
        return set(ref(db, '/sport/' + uid + '/' + date), { ...body, date });
    }
    getSport(uid: string) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, `sport/${uid}`))
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
    // =========== RECETAS DIARIAS DE USUARIO
    postRDU(uid: string, day: any, body: any) {
        const date = new Date().getTime();
        return set(ref(db, '/recipesDayUser/' + uid + '/' + day + '/' + date), { ...body, date });
    }
    getRDU(uid: string, day: any) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, `recipesDayUser/${uid}/${day}`))
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
    deleteRDU(uid: string, day: any) {
        return remove(ref(db, `/recipesDayUser/${uid}/${day}`));
    }

    uploadFile(event: any) {
        return new Promise((resolve, reject) => {
            const file = event.srcElement.files[0];
            const reader: any = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = function () {
                resolve('data:image/jpeg;base64,' + btoa(reader.result))
            };
            reader.onerror = function () {
                console.log('there are some problems');
                reject(false)
            };
        })
    }
}

export default new ApiService();