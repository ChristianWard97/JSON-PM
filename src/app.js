const yargs = require ("yargs");

const { connection, client } = require("./db/connection");

const {addFilm, listFilms, updateFilm, deleteFilm, deleteFilms, updateFilms} = require ("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title, actor: yargsObj.actor,director:yargsObj.director});
        console.log("Success, your entry has been added!")
    } else if(yargsObj.list) {
        await listFilms(collection);
    } else if(yargsObj.update){
        await updateFilm(collection,yargsObj.update, {title:yargsObj.title,actor:yargsObj,director:yargsObj.director});
        console.log("Your entry has updated!");
    } else if(yargsObj.delete) {
        await deleteFilm(collection.yargsObj.delete);
        console.log("Your entry has been deleted!")
    } else if (yargsObj.deleteMulti){
        await deleteFilms(collection.yargsObj.deleteMulti);
        console.log("Multiple entries have been deleted!");
    }
    else {
        console.log("Wrong input!");
    }
    await client.close();

};

app(yargs.argv);