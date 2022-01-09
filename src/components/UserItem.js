import React from 'react';
import {Table} from 'semantic-ui-react'

export default function UserItem(props) {
    return (
        <Table.Row>
            <Table.Cell>{props.user.login}</Table.Cell>
            <Table.Cell><a target="_blank" href={props.user.html_url}>{props.user.html_url}</a></Table.Cell>
            <Table.Cell><a target="_blank" href={props.user.repos_url}>{props.user.repos_url}</a></Table.Cell>
        </Table.Row>
    )
}

