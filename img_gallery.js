const images = [
    {
        image: "https://images.unsplash.com/photo-1780427670049-43aa7921e3f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2UlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
    },
    {
        image: "https://images.unsplash.com/photo-1726492741161-46ec6de8ab1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2UlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
    },
    {
        image: "https://images.unsplash.com/photo-1678347096883-194eee8c1ea7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    }, {
        image: "https://images.unsplash.com/photo-1666718885155-be10a011641a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2UlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
    }, {
        image: "https://plus.unsplash.com/premium_photo-1706430433607-48f37bdd71b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1679690708510-7e2d282c3d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1679690708510-7e2d282c3d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        image: "https://images.unsplash.com/photo-1780427670049-43aa7921e3f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2UlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
    },
    {
        image: "https://images.unsplash.com/photo-1726492741161-46ec6de8ab1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2UlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
    },
    {
        image: "https://images.unsplash.com/photo-1678347096883-194eee8c1ea7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        image: "https://images.unsplash.com/photo-1666718885155-be10a011641a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2UlMjBnYWxsZXJ5fGVufDB8fDB8fHww"
    }, {
        image: "https://plus.unsplash.com/premium_photo-1706430433607-48f37bdd71b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1679690708510-7e2d282c3d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1679690708510-7e2d282c3d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGltYWdlJTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
];