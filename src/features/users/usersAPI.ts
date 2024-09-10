export const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Network response is not ok");
        }
        const data = response.json();
        return data;
        
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error
    }
};