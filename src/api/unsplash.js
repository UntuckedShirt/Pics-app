import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 0qfpFs1kY1e-QC4HAMIXOJCisZRZXqa5QliG55ZFqwg'

    }

});

