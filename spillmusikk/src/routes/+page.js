import sanityClient from "@sanity/client";

const client = sanityClient({
projectId: "a70jffeo",
dataset: "production",
apiVersion: "2021-10-21",
useCdn: false
});

export async function load() {

    const data = await client.fetch(
        `*[_type == "music"] | order(title asc) {
            title,
            game,
            file{
                asset->
            }
        }`
        );
    
    if (data) {
    
        return {
        music: data
        
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };

}


