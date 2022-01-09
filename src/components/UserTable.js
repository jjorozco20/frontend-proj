import React from 'react';
import { Table } from 'semantic-ui-react';
import UserItem from './UserItem';

export default function UserTable(props) {
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>User Profile</Table.HeaderCell>
                        <Table.HeaderCell>Repos</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {props.usersList.map(user => <UserItem key={user.id} user={user} />)}
                </Table.Body>

            </Table>
        </div>
    )
}
