exports.addFilm = async (collection, filmObj) => {
    try{
        // add database entry using built in method of insertOne 
        // and passing the filmObj entered by the user.
        const addEntry = await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listFilms = async (collection) => {
    try {
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch (error) {
        console.log(error);
    }
};

// Create function to update one or more database entries.
exports.updateFilms = async (collection, oldTitle, newFilm) => {
    try{
        const checkTitle = {title:oldTitle}
        const updateTo = {$set:{title:newFilm.title,actor:newFilm.actor,director:newFilm.director}};
        const filmUpdate = await collection.updateOne(checkTitle,updateTo);
        console.log(filmUpdate);
    }
    catch (error) {
        console.log(error);
    }
};

// Create function to delete one or more database entries.
exports.deleteFilm = async (collection, toDelete) => {
    try{
        const deleteTitle = {title:toDelete};
        const filmDelete = await collection.deleteOne(deleteTitle);
        console.log(filmDelete);
    }
    catch (error) {
        console.log(error);
    }
};



