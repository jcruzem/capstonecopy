const Cloudant = require("@cloudant/cloudant");

main();


const cloudant = Cloudant({
    url: "https://d9bc64c6-a74c-41a5-a92e-205aa5366b60-bluemix.cloudantnosqldb.appdomain.cloud",
    plugins: {
        iamauth: {
            iamApiKey: "612ydeNm9FBSfC21IZXVMXce4ZuD0x9c6-Ir9CuXWypk"
        }
    }
})



console.log("creating connection ....\n");
const db = cloudant.db.use('dealer-part');
console.log("********* Connection created *************\n");

async function main() {
    try {
    } catch (error) {
        console.log(error);
    }
}






async function post(object) {
    let res = "";
    res = await db.insert(doc0);
    console.log(res);
    console.log(`added doc to db:${res}`);
}

async function posts(objects) {




}

async function get(key) {
    console.log('get doc from DataBase');
    res = await db.get(doc0._id);
    console.log(res);
}

async function getList() {
    console.log('getting db list');
    let allDBS = await cloudant.db.list();
    console.log(`got db list [${allDBS}]`);
}

async function getStateList(state) {
    console.log('getting list bt partition');
    res = await db.partitionedList(`${state}`, { include_docs: true });
    console.log(res);
}


async function update(_rev, params) {

}

async function trash(obj) { }
