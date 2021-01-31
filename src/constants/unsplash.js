const key = 'X62b9kExZKJfWZVN60JVJCRBBTmhTfGOa7NjJLGtoWg'
const Unsplash = {
    access_key: key,
    page_url : ((page_no) => `https://api.unsplash.com/photos?page=${page_no}?client_id=${key}`),
    random_url: `https://api.unsplash.com/photos/?client_id=X62b9kExZKJfWZVN60JVJCRBBTmhTfGOa7NjJLGtoWg`
}

export default Unsplash