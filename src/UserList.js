import axios from 'axios';
import {useEffect,useState} from 'react'
import { Card } from 'react-bootstrap';
const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="caard">
    {userList.map((el) => (
      <Card  className="Nor" style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title className="info">{el.name}</Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ textAlign: "center" }}
          >
            {el.username}
          </Card.Subtitle>
          <Card.Text className="info">
            Address: {el.address.street}/{el.address.city}/
            {el.address.zipcode}
          </Card.Text>
          <Card.Link href="#" className="info">
            {el.email}
          </Card.Link>
        </Card.Body>
      </Card>
    ))}
  </div> 
  )

  }
export default UserList