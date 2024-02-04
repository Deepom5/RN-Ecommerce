import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sessions.db');


// This db is created in the local memory of the phone
export const initDB = () => {
    const promise =  new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)',
                [],
                (_, result)=> resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise;
}


export const insertNewSession = ({localId, email, token}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO sessions (localId, email, token) VALUES (?,?,?)',
                [localId, email, token],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise;
}

export const deleteSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`DELETE FROM sessions`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise;
}

export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM sessions', 
                [],
                (_,result) => resolve(result),
                (_,error) => reject(error)
            )
        })
    })
    return promise
}