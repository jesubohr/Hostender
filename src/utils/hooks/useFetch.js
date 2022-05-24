function GET (url, headers = {}) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
    });
}

function POST (url, body, headers = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body)
    }).then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
    });
}

export default function useFetch (method = 'GET') {
    if (method === 'GET') return GET;
    if (method === 'POST') return POST;
}
