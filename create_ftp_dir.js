const ftp = require("basic-ftp");

async function createDir() {
    const client = new ftp.Client();
    try {
        await client.access({
            host: "ftp.soffuture.club",
            // Trying the main root username (usually without the @domain part)
            user: "clubhome",
            password: "bevqy64sag",
            secure: false
        });
        console.log("Connected to FTP server with user 'clubhome'.");
        
        // Create the directory
        await client.ensureDir("xyz");
        console.log("Successfully created folder: 'xyz'");
        
        // List files to confirm we are in the root directory
        await client.cd("/");
        const list = await client.list();
        console.log("\n--- CURRENT FOLDERS AND FILES ---");
        list.forEach(item => {
            console.log(`[${item.type === 2 ? 'DIR' : 'FILE'}] ${item.name}`);
        });
        console.log("---------------------------------\n");
    } catch (err) {
        console.error("Error connecting or creating folder:", err.message);
    }
    client.close();
}

createDir();
