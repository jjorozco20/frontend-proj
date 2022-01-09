import React, { useState, useEffect } from 'react';
import './App.css';
import { Form, Card, Image, Icon, Table, Menu} from 'semantic-ui-react';
import UserItem from './components/UserItem';

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users?since=150`)
      .then(response => response.json())
      .then(data => {
        setUserList(data);
      });
  }, []);


  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(result => result.json())
      .then(data => {
        setData(data);
      });
  }

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  }



  return (
    <div>
      
      <div>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
      </div>

      <div className="navbar">Github Search</div>
      
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Github User'
              name='github'
              onChange={handleSearch}
            />
            <Form.Button content='Search' />
          </Form.Group>
        </Form>
      </div>

      <div className='card'>
        <Card>
          <Image
            src={avatar}
            wrapped ui={false}
          />
          <Card.Content>
            <Card.Header>{name}</Card.Header> <br></br>
            <Card.Header>{userName}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {followers} Followers
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {repos} Repos
            </a>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {following} Following
            </a>
          </Card.Content>
        </Card>
      </div>
      <div className='usertable'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>User Profile</Table.HeaderCell>
              <Table.HeaderCell>Repos</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {userList.map(user => <UserItem key={user.id} user={user} />)}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </div>
  );
}

export default App;
