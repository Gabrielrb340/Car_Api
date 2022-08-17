import app from "./main";

// Initialize app



app.init().then(async () => {
    // Start the server
    await app.start().then(() => {
        console.log(`Server is running at: ${app.app.info.uri}`);
    })

});

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});