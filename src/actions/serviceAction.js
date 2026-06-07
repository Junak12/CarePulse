export async function getServices(params) {
    try {
        const result = await fetch("http://localhost:3000/api/services", {
          next: { revalidate: 3600 },
        });

        if (!result.ok) {
          throw new Error("failed to fetch data");
        }

        const {data} = await result.json();
        return data;
    } catch (error) {
        throw error;
    }
}