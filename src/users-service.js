const users = [
    {id: 1, firstName: 'Clair', lastName: 'Kermit', email: 'clair@test.com'},
    {id: 2, firstName: 'Seward', lastName: 'Byron', email: 'seward@test.com'},
    {id: 3, firstName: 'Laurene', lastName: 'Gwendoline', email: 'laurene@test.com'},
    {id: 4, firstName: 'Maura', lastName: 'Praise', email: 'maura@test.com'},
    {id: 5, firstName: 'Otto', lastName: 'Elihu', email: 'otto@test.com'},
];

/**
 * // TODO - this should return a promise of a JavaScript object, not a string.
 *
 * Returns a list of users.
 *
 * http://httpbin.org/anything returns anything you POST to it. It returns a JSON which has many
 * interesting information. However, for this exersize, we just care about the "json" property in
 * the body, which contains what we sent in the post.
 *
 * @return {Promise<any>}
 */
export const getUsers = () => {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(users),
        redirect: 'follow'
    };

    // TODO - update this code so that it returns just the users (which are in the "json" property
    //  of the response body)
    return fetch("http://httpbin.org/anything", requestOptions);
};
