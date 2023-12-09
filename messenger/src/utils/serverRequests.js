import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);
const authData = await pb.admins.authWithPassword('coolguys@gmail.com', 'password123');

const createUser = async (payload) => {
    const resp = {
        data: null,
        error: null,
    }

    try {
        resp.data = await pb.collection('users').create(payload);
    } catch (e) {
        resp.error = 'Username already exists';
    }

    return resp;
}
const getAllUsers = async () => {
    const resp = await pb.collection('users').getList();

    console.log("resp", resp);

    return resp;
}

const login = async (payload) => {
    const resp = {
        data: null,
        error: null,
    }

        const matchedUser = await pb.collection('users').getList(1, 1, {
            filter: pb.filter("identity ~ {:identity} && password ~ {:password}", { identity: payload.identity, password: payload.password}),
        });

        if(matchedUser.totalItems === 0) {
            resp.error = "Invalid credentials.";
        }
        else {
            resp.data =  matchedUser.items[0];
            localStorage.setItem('user_id', JSON.stringify(matchedUser.items[0].id));
            localStorage.setItem('username', payload.identity);
        }

    return resp;
}

export {createUser, login, getAllUsers};