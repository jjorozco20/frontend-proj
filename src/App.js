import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';

function App() {
  const [oneUser, setOneUser] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users?since=1&per_page=200`)
      .then(response => response.json())
      .then(data => {
        setUserList(data);
        setIsLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = userList.slice(indexOfFirstPost, indexOfLastPost)

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(result => result.json())
      .then(data => {
        setOneUser(data);
      });
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
        <UserCard user={oneUser} />
      </div>

      <div className='usertable'>
        <UserTable usersList={currentPosts} loading={isLoading} />
        <Pagination postPerPage={postPerPage} totalPosts={userList.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default App;
