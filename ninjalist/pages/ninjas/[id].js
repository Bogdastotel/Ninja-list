
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    })

    // this function should return array of objects ==> paths: [{params: { id: id}}, {params: { id: id}}, {params: { id: id}}] and also
    // fallback
    // (if the user visits the route that doesnt exists it will show the 404 page)

    return {
        paths: paths,
        fallback: false
    }

}

export  const getStaticProps = async  (context) => {
    const  id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: {
            ninja: data
        }
    }
}

const Details = ({ninja}) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    );
};

export default Details;
