import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";

const Feed = () => {
  const data = [
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
  ]

  // Un-comment the lines below to complete your solution
  // ====================

  // const [_________, _________] = useState();

  // const getPostsData = () => {
  //   axios
  //     .get(_________) //THIS IS YOUR URL OF YOUR API
  //     .then(__________) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
  //     .catch(__________);  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
  // };

  // useEffect(() => {
  //   _________();
  // }, [])

  // ====================

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data && data.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost __________ />
    </div>
  )

}


export default Feed;
