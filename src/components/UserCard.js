import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function UserCard(props) {
    return (
            <Card>
                <Image
                    src={props.user.avatar_url}
                    wrapped ui={false}
                />
                <Card.Content>
                    <Card.Header>{props.user.name}</Card.Header> <br></br>
                    <Card.Header>{props.user.login}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {props.user.followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {props.user.public_repos} Repos
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {props.user.following} Following
                    </a>
                </Card.Content>
            </Card>
    )
}
