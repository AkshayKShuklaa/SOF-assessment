const ftp = require("basic-ftp");

async function listFiles() {
    const client = new ftp.Client();
    // client.ftp.verbose = true; // turning off verbose to make output cleaner
    try {
        await client.access({
            host: "ftp.soffuture.club",
            user: "deploy@soffuture.club",
            password: "DeployFtpSecure!123",
            secure: false
        });
        console.log("Connected to FTP server.");
        const list = await client.list();
        console.log("\n--- FOLDERS AND FILES ---");
        list.forEach(item => {
            console.log(`[${item.type === 2 ? 'DIR' : 'FILE'}] ${item.name}`);
        });
        console.log("-------------------------\n");
    } catch (err) {
        console.error("Error connecting or listing files:", err);
    }
    client.close();
}

listFiles();
