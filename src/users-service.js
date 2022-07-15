const users = [
    {id: 1, firstName: 'Clair', lastName: 'Kermit', email: 'clair@test.com'},
    {id: 2, firstName: 'Seward', lastName: 'Byron', email: 'seward@test.com'},
    {id: 3, firstName: 'Laurene', lastName: 'Gwendoline', email: 'laurene@test.com'},
    {id: 4, firstName: 'Maura', lastName: 'Praise', email: 'maura@test.com'},
    {id: 5, firstName: 'Otto', lastName: 'Elihu', email: 'otto@test.com'},
];

/**
 *
 * Returns a list of users.
 *
 * https://httpbin.org/delay/1 returns anything you POST to it. It returns a JSON which has many
 * interesting information. However, for this exercise, we just care about the "data" property in
 * the body, which contains what we sent in the as a _string_.
 *
 * @return {Promise<any>}
 */
export const getUsers = (delay=0, forceError=false) => {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const url = forceError ? 'invalid_url' : `https://httpbin.org/delay/${delay}`;

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(users),
        redirect: 'follow'
    };

    // TODO - update this code so that it returns just the users (which are in the "data" property
    //  of the response body.)
    return fetch(url, requestOptions);
};
