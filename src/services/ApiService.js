

/**
 *
 *
 * @param {string} ruta La ruta de la base de datos que queremos obtener
 * @return {*} get ruta de base de datos
 */
function get(ruta) {
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

/**
 *
 *
 * @param {string} UID El ID del usuario
 * @param {*} Datos Resto de datos del usuario (tipo Any)
 * @return {*} update usuario
 */
function updateUser(key, body) {
    return update(ref(db, `/user/${key}/`), body);
} 
/**
 *
 *
 * @param {string} idUser ID del usuario
 * @param {*} body Resto de datos del usuario 
 * @return {*} set usuario 
 */
function postUser(idUser, body) {
    return set(ref(db, `/user/${idUser}/`), body);
}

/**
 *
 *
 * @param {string} idUser ID del usuario
 * @return {*} true o false
 */
function getIsAdmin(idUser) {
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

/**
 *
 *
 * @param {string} idUser ID del usuario 
 * @return {*} Tipo any, todos los datos del usuario
 */
function getUser(idUser) {
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
/**
 *
 *
 * @param {string} key ID de usuario
 * @return {*} Remove usuario 
 */
function deleteUser(key) {
    return remove(ref(db, `/user/${key}/`));
}
/**
 *
 *
 * @param {string} idUser ID de usuario
 * @param {array} body Array numerico de pesos del usuario
 * @return {*} set peso actual del usuario
 */
function postPeso(idUser, body) {
    set(ref(db, `/user/${idUser}/currentWeight`), body[body.length - 1]);
    return set(ref(db, `/user/${idUser}/weights/`), body);
}
/**
 *
 *
 * @param {*} body Tipo Any, todos los datos de la receta creada
 * @return {*} update receta
 */
function createRecipeBeFit(body) {
    return update(ref(db, `/recipes/${body.id}`), body);
}
/**
 *
 *
 * @param {String} id ID receta BeFit
 * @return {*} remove receta
 */
function deleteRBeFit(id) {
    return remove(ref(db, `/recipes/${id}`));
}


/**
 *
 *
 * @param {string} idUser Id de usuario
 * @return {*} get recetas readas por el usaurio
 */
function getRecipesUser(idUser) {
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

/**
 *
 *
 * @param {string} key ID de receta
 * @param {string} uid ID de usuario
 * @param {*} body Datos receta
 * @return {*} Update receta usuario
 */
function updateRecipeU(key,uid, body) {
    return update(ref(db, `/recipesU/${uid}/${key}/`), body);
}
/**
 *
 *
 * @param {string} key ID de usuario
 * @param {string} body Datos de la receta
 * @return {*} set receta usuario
 */
function setRecipeU(key, body) {
    return set(ref(db, `/recipesU/${key}/`), body);
}
/**
 *
 *
 * @param {string} key ID de usuario 
 * @param {*} body Datos de receta
 * @return {*} update receta publica del usuario 
 */
function updateRecipeP(key, body) {
    return update(ref(db, `/recipesP/${key}/`), body);
}



/**
 *
 *
 * @param {string} uid ID usuario 
 * @param {number} day ID dia
 * @param {*} body datos receta
 * @return {*} set receta en dia X de usuario 
 */
function postRDU(uid, day, body) {
    const date = new Date().getTime();
    return set(ref(db, '/recipesDayUser/' + uid + '/' + day + '/' + date), { ...body, date });
/**
 *
 *
 * @param {string} uid ID Usuario 
 * @param {number} day
 * @return {*} get recetas de dia X de usuario
 */
function getRDUday(uid , day ) {
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
}

/**
 *
 *
 * @param {string} uid ID Usuario
 * @return {*} get recetas de usuario
 */
function getRDU(uid) {
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

/**
 *
 *
 * @param {string} uid ID Usuario
 * @param {number} day ID dia
 * @return {*} remove recetas del dia X
 */
function deleteRDU(uid, day) {
    return remove(ref(db, `/recipesDayUser/${uid}/${day}`));
}



/**
 *
 *
 * @param {*} body Datos deporte
 * @return {*} set deporte practicable 
 */
function postSportList(body) {
    const id = new Date().getTime();
    return set(ref(db, '/sportList/' + id), { ...body, id });
}

/**
 *
 *
 * @param {string} key ID deporte
 * @param {*} body Datos deporte
 * @return {*} update datos deporte practicable
 */
function updateSportList(key, body) {
    return update(ref(db, `/sportList/${key}/`), body);
}
/**
 *
 *
 * @param {string} id ID deporte
 * @return {*}  remove deporte practicable
 */
function deleteSport(id) {
    return remove(ref(db, `/sportList/${id}`));
}
/**
 *
 *
 * @param {string} uid ID usuario
 * @param {*} body Datos deporte
 * @return {*} set deporte practicado
 */
function postSport(uid, body) {
    const date = new Date().getTime();
    return set(ref(db, '/sport/' + uid + '/' + date), { ...body, date });
}

/**
 *
 *
 * @param {*} uid ID usuario
 * @return {*} get deportes practicados
 */
function getSport(uid) {
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
/**
 *
 *
 * @param {*} event Evento subida foto
 * @return {*} promise
 */
function uploadFile(event) {
    return new Promise((resolve, reject) => {
        const file = event.srcElement.files[0];
        const reader = new FileReader();
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