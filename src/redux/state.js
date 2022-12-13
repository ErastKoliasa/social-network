const state = {
    profilePage: {
        postsData: [
            { id: 1, post: "post 1" },
            { id: 2, post: "post 2" },
            { id: 3, post: "post 3" },
            { id: 4, post: "post 4" }
        ]
    },
    messagesPage: {
        conversationsData: [
            { id: 1, name: "Taras" },
            { id: 2, name: "Nikita" },
            { id: 3, name: "Roman" }
        ],
        dialogsItemData: [
            { id: 1, messages: "Hello!" },
            { id: 2, messages: "Hi!" },
            { id: 3, messages: "What are you doing?" }
        ]
    }
}

export default state