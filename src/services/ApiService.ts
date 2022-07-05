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
    start() {
        db
    }
    // USER FUNCTIONS
    updateUser(key: any, body: any) {
        return update(ref(db, `/user/${key}/`), body);
    } 
    postUser(idUser: any, body: any) {
        return set(ref(db, `/user/${idUser}/`), body);
    }
    getIsAdmin(idUser: any) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, `user/${idUser}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    return snapshot.val().isAdmin ? true : false;
                } else {
                    console.log("No data available");
                    return false;
                }
            });
        // catch((error) => {
        //     console.error(error);
        // });
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
    deleteUser(key: any) {
        return remove(ref(db, `/user/${key}/`));
    }
    postPeso(idUser: any, body: number[]) {
        set(ref(db, `/user/${idUser}/currentWeight`), body[body.length - 1]);
        return set(ref(db, `/user/${idUser}/weights/`), body);
    }

    //BEFIT FUNTCIONS
    createRecipeBeFit(body: any) {
        return update(ref(db, `/recipes/${body.id}`), body);
    }
    deleteRBeFit(id: string) {
        return remove(ref(db, `/recipes/${id}`));
    }

    //RecipeU FUNCTIONS 
    getRecipesUser(idUser: any) {
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
    
    
    updateRecipeU(key: any,uid: any, body: any) {
        return update(ref(db, `/recipesU/${uid}/${key}/`), body);
    }

    setRecipeU(key: any, body: any) {
        return set(ref(db, `/recipesU/${key}/`), body);
    }
    //RecipeP FUNCTIONS
    updateRecipeP(key: any, body: any) {
        return update(ref(db, `/recipesP/${key}/`), body);
    }
    
   
    // =========== RECETAS DIARIAS DE USUARIO
    postRDU(uid: string, day: any, body: any) {
        const date = new Date().getTime();
        return set(ref(db, '/recipesDayUser/' + uid + '/' + day + '/' + date), { ...body, date });
    }
    getRDUday(uid: string, day: any) {
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
    getRDU(uid: string) {
        const dbRef = ref(getDatabase());
        return get(child(dbRef, `recipesDayUser/${uid}`))
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
    
   

    //SPORTSLIST FUNCTIONS
    postSportList(body: any) {
        const id = new Date().getTime();
        return set(ref(db, '/sportList/' + id), { ...body, id });
    }
    updateSportList(key: any, body: any) {
        return update(ref(db, `/sportList/${key}/`), body);
    }

    deleteSport(id: string) {
        return remove(ref(db, `/sportList/${id}`));
    }
 //SPORT FUNCTIONS
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