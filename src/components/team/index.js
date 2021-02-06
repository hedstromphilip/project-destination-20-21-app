import React from 'react';
import { Team } from 'src/constants';

import './team.css';

const Team = () => {
    return (
        <div class="grid">
            {Object.values(Team).map((member,idx) => {
                return (
                    <div key={idx.toString()} class="grid-item" style={{gridArea: member.gridId}}>
                        <div class="team-member">
                            <p class="title team-member-name">{member.name}</p>
                            <p class="subtitle team-member-role">{`${member.role}`}</p>
                            <a href={`mailto:${member.mail}`}><i class="far fa-envelope mail-icon" /></a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;